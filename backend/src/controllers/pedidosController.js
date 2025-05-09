const prisma = require('../prismaClient');
// Controlador para pedidos
const pedidosController = {
  // Listar todos os pedidos
  listarPedidos: async (req, res) => {
    try {
      const pedidos = await prisma.pedido.findMany({
        include: {
          costureira: {
            select: {
              id: true,
              nome: true
            }
          },
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
        },
        orderBy: {
          dataEnvio: 'desc'
        }
      });
      res.json(pedidos);
    } catch (error) {
      console.error('Erro ao listar pedidos:', error);
      res.status(500).json({ error: 'Erro ao listar pedidos' });
    }
  },

  // Obter um pedido específico
  obterPedido: async (req, res) => {
    try {
      const { id } = req.params;
      const pedido = await prisma.pedido.findUnique({
        where: { id: Number(id) },
        include: {
          costureira: true,
          itensPedido: {
            include: {
              produto: true
            }
          },
          itensMaterial: {
            include: {
              material: true
            }
          },
          recebimento: true,
          devolucao: {
            include: {
              itensDevolucao: true
            }
          }
        }
      });

      if (!pedido) {
        return res.status(404).json({ error: 'Pedido não encontrado' });
      }

      res.json(pedido);
    } catch (error) {
      console.error('Erro ao obter pedido:', error);
      res.status(500).json({ error: 'Erro ao obter pedido' });
    }
  },

  // Criar um novo pedido
  criarPedido: async (req, res) => {
    try {
      const { 
        costureiraId, 
        dataPrevisao, 
        observacao, 
        itensPedido, 
        itensMaterial 
      } = req.body;

      // Validação básica
      if (!costureiraId) {
        return res.status(400).json({ error: 'Costureira é obrigatória' });
      }

      if (!itensPedido || !Array.isArray(itensPedido) || itensPedido.length === 0) {
        return res.status(400).json({ error: 'Itens de produto são obrigatórios' });
      }

      // Verificar se a costureira existe
      const costureira = await prisma.costureira.findUnique({
        where: { id: Number(costureiraId) }
      });

      if (!costureira) {
        return res.status(404).json({ error: 'Costureira não encontrada' });
      }

      // Criar pedido com transação para garantir consistência
      const novoPedido = await prisma.$transaction(async (prisma) => {
        // Criar o pedido
        const pedido = await prisma.pedido.create({
          data: {
            costureiraId: Number(costureiraId),
            dataPrevisao: dataPrevisao ? new Date(dataPrevisao) : undefined,
            observacao,
            status: 'ENVIADO'
          }
        });

        // Adicionar itens de produto
        for (const item of itensPedido) {
          const produto = await prisma.produto.findUnique({
            where: { id: Number(item.produtoId) }
          });

          if (!produto) {
            throw new Error(`Produto com ID ${item.produtoId} não encontrado`);
          }

          await prisma.itemPedido.create({
            data: {
              pedidoId: pedido.id,
              produtoId: Number(item.produtoId),
              quantidade: Number(item.quantidade),
              valorUnitario: produto.valorUnitario
            }
          });
        }

        // Adicionar itens de material, se houver
        if (itensMaterial && Array.isArray(itensMaterial) && itensMaterial.length > 0) {
          for (const item of itensMaterial) {
            const material = await prisma.material.findUnique({
              where: { id: Number(item.materialId) }
            });

            if (!material) {
              throw new Error(`Material com ID ${item.materialId} não encontrado`);
            }

            await prisma.itemMaterial.create({
              data: {
                pedidoId: pedido.id,
                materialId: Number(item.materialId),
                quantidade: Number(item.quantidade)
              }
            });
          }
        }

        return pedido;
      });

      // Buscar o pedido completo para retornar
      const pedidoCompleto = await prisma.pedido.findUnique({
        where: { id: novoPedido.id },
        include: {
          costureira: true,
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
      });

      res.status(201).json(pedidoCompleto);
    } catch (error) {
      console.error('Erro ao criar pedido:', error);
      res.status(500).json({ error: `Erro ao criar pedido: ${error.message}` });
    }
  },

  // Atualizar um pedido existente
  atualizarPedido: async (req, res) => {
    try {
      const { id } = req.params;
      const { dataPrevisao, observacao } = req.body;

      // Verificar se o pedido existe
      const pedido = await prisma.pedido.findUnique({
        where: { id: Number(id) }
      });

      if (!pedido) {
        return res.status(404).json({ error: 'Pedido não encontrado' });
      }

      // Atualizar pedido
      const pedidoAtualizado = await prisma.pedido.update({
        where: { id: Number(id) },
        data: {
          dataPrevisao: dataPrevisao ? new Date(dataPrevisao) : undefined,
          observacao
        },
        include: {
          costureira: true,
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
      });

      res.json(pedidoAtualizado);
    } catch (error) {
      console.error('Erro ao atualizar pedido:', error);
      res.status(500).json({ error: 'Erro ao atualizar pedido' });
    }
  },

  // Atualizar status de um pedido
  atualizarStatusPedido: async (req, res) => {
    try {
      const { id } = req.params;
      const { status } = req.body;

      // Validação do status
      const statusValidos = ['ENVIADO', 'RECEBIDO', 'PRODUCAO', 'FINALIZADO', 'DEVOLVIDO'];
      if (!status || !statusValidos.includes(status)) {
        return res.status(400).json({ 
          error: 'Status inválido', 
          statusValidos 
        });
      }

      // Verificar se o pedido existe
      const pedido = await prisma.pedido.findUnique({
        where: { id: Number(id) }
      });

      if (!pedido) {
        return res.status(404).json({ error: 'Pedido não encontrado' });
      }

      // Atualizar status do pedido
      const pedidoAtualizado = await prisma.pedido.update({
        where: { id: Number(id) },
        data: { status }
      });

      res.json(pedidoAtualizado);
    } catch (error) {
      console.error('Erro ao atualizar status do pedido:', error);
      res.status(500).json({ error: 'Erro ao atualizar status do pedido' });
    }
  },

  // Remover um pedido
  removerPedido: async (req, res) => {
    try {
      const { id } = req.params;

      // Verificar se o pedido existe
      const pedido = await prisma.pedido.findUnique({
        where: { id: Number(id) }
      });

      if (!pedido) {
        return res.status(404).json({ error: 'Pedido não encontrado' });
      }

      // Verificar se o pedido já tem recebimento ou devolução
      const recebimento = await prisma.recebimento.findUnique({
        where: { pedidoId: Number(id) }
      });

      const devolucao = await prisma.devolucao.findUnique({
        where: { pedidoId: Number(id) }
      });

      if (recebimento || devolucao) {
        return res.status(400).json({ 
          error: 'Não é possível remover um pedido que já possui recebimento ou devolução' 
        });
      }

      // Remover pedido e seus itens relacionados em uma transação
      await prisma.$transaction(async (prisma) => {
        // Remover itens de material
        await prisma.itemMaterial.deleteMany({
          where: { pedidoId: Number(id) }
        });

        // Remover itens de pedido
        await prisma.itemPedido.deleteMany({
          where: { pedidoId: Number(id) }
        });

        // Remover o pedido
        await prisma.pedido.delete({
          where: { id: Number(id) }
        });
      });

      res.json({ message: 'Pedido removido com sucesso' });
    } catch (error) {
      console.error('Erro ao remover pedido:', error);
      res.status(500).json({ error: 'Erro ao remover pedido' });
    }
  }
};

module.exports = pedidosController;
