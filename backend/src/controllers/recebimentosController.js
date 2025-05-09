const prisma = require('../prismaClient');

// Controlador para recebimentos
const recebimentosController = {
  // Listar todos os recebimentos
  listarRecebimentos: async (req, res) => {
    try {
      const recebimentos = await prisma.recebimento.findMany({
        include: {
          pedido: {
            include: {
              itensPedido: {
                include: {
                  produto: true
                }
              }
            }
          },
          costureira: true
        },
        orderBy: {
          dataRecebimento: 'desc'
        }
      });
      res.json(recebimentos);
    } catch (error) {
      console.error('Erro ao listar recebimentos:', error);
      res.status(500).json({ error: 'Erro ao listar recebimentos' });
    }
  },

  // Obter um recebimento específico
  obterRecebimento: async (req, res) => {
    try {
      const { id } = req.params;
      const recebimento = await prisma.recebimento.findUnique({
        where: { id: Number(id) },
        include: {
          pedido: {
            include: {
              itensPedido: {
                include: {
                  produto: true
                }
              },
              itensMaterial: {
                include: {
                  material: true
                }
              }
            }
          },
          costureira: true
        }
      });

      if (!recebimento) {
        return res.status(404).json({ error: 'Recebimento não encontrado' });
      }

      res.json(recebimento);
    } catch (error) {
      console.error('Erro ao obter recebimento:', error);
      res.status(500).json({ error: 'Erro ao obter recebimento' });
    }
  },

  // Criar um novo recebimento
  criarRecebimento: async (req, res) => {
    try {
      const { pedidoId, observacao } = req.body;

      // Validação básica
      if (!pedidoId) {
        return res.status(400).json({ error: 'Pedido é obrigatório' });
      }

      // Verificar se o pedido existe
      const pedido = await prisma.pedido.findUnique({
        where: { id: Number(pedidoId) },
        include: {
          costureira: true
        }
      });

      if (!pedido) {
        return res.status(404).json({ error: 'Pedido não encontrado' });
      }

      // Verificar se o pedido já tem recebimento
      const recebimentoExistente = await prisma.recebimento.findUnique({
        where: { pedidoId: Number(pedidoId) }
      });

      if (recebimentoExistente) {
        return res.status(400).json({ error: 'Este pedido já possui um recebimento registrado' });
      }

      // Criar recebimento e atualizar status do pedido em uma transação
      const novoRecebimento = await prisma.$transaction(async (prisma) => {
        // Criar o recebimento
        const recebimento = await prisma.recebimento.create({
          data: {
            pedidoId: Number(pedidoId),
            costureiraId: pedido.costureiraId,
            observacao
          }
        });

        // Atualizar status do pedido para RECEBIDO
        await prisma.pedido.update({
          where: { id: Number(pedidoId) },
          data: { status: 'RECEBIDO' }
        });

        return recebimento;
      });

      // Buscar o recebimento completo para retornar
      const recebimentoCompleto = await prisma.recebimento.findUnique({
        where: { id: novoRecebimento.id },
        include: {
          pedido: true,
          costureira: true
        }
      });

      res.status(201).json(recebimentoCompleto);
    } catch (error) {
      console.error('Erro ao criar recebimento:', error);
      res.status(500).json({ error: `Erro ao criar recebimento: ${error.message}` });
    }
  },

  // Atualizar um recebimento existente
  atualizarRecebimento: async (req, res) => {
    try {
      const { id } = req.params;
      const { observacao } = req.body;

      // Verificar se o recebimento existe
      const recebimento = await prisma.recebimento.findUnique({
        where: { id: Number(id) }
      });

      if (!recebimento) {
        return res.status(404).json({ error: 'Recebimento não encontrado' });
      }

      // Atualizar recebimento
      const recebimentoAtualizado = await prisma.recebimento.update({
        where: { id: Number(id) },
        data: {
          observacao
        },
        include: {
          pedido: true,
          costureira: true
        }
      });

      res.json(recebimentoAtualizado);
    } catch (error) {
      console.error('Erro ao atualizar recebimento:', error);
      res.status(500).json({ error: 'Erro ao atualizar recebimento' });
    }
  },

  // Remover um recebimento
  removerRecebimento: async (req, res) => {
    try {
      const { id } = req.params;

      // Verificar se o recebimento existe
      const recebimento = await prisma.recebimento.findUnique({
        where: { id: Number(id) },
        include: {
          pedido: true
        }
      });

      if (!recebimento) {
        return res.status(404).json({ error: 'Recebimento não encontrado' });
      }

      // Remover recebimento e atualizar status do pedido em uma transação
      await prisma.$transaction(async (prisma) => {
        // Remover o recebimento
        await prisma.recebimento.delete({
          where: { id: Number(id) }
        });

        // Atualizar status do pedido para ENVIADO (status original)
        await prisma.pedido.update({
          where: { id: recebimento.pedidoId },
          data: { status: 'ENVIADO' }
        });
      });

      res.json({ message: 'Recebimento removido com sucesso' });
    } catch (error) {
      console.error('Erro ao remover recebimento:', error);
      res.status(500).json({ error: 'Erro ao remover recebimento' });
    }
  }
};

module.exports = recebimentosController;
