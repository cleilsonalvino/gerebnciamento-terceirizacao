const prisma = require('../prismaClient');

// Controlador para devoluções
const devolucoesController = {
  // Listar todas as devoluções
  listarDevolucoes: async (req, res) => {
    try {
      const devolucoes = await prisma.devolucao.findMany({
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
          costureira: true,
          itensDevolucao: true
        },
        orderBy: {
          dataDevolucao: 'desc'
        }
      });
      res.json(devolucoes);
    } catch (error) {
      console.error('Erro ao listar devoluções:', error);
      res.status(500).json({ error: 'Erro ao listar devoluções' });
    }
  },

  // Obter uma devolução específica
  obterDevolucao: async (req, res) => {
    try {
      const { id } = req.params;
      const devolucao = await prisma.devolucao.findUnique({
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
          costureira: true,
          itensDevolucao: true
        }
      });

      if (!devolucao) {
        return res.status(404).json({ error: 'Devolução não encontrada' });
      }

      res.json(devolucao);
    } catch (error) {
      console.error('Erro ao obter devolução:', error);
      res.status(500).json({ error: 'Erro ao obter devolução' });
    }
  },

  // Criar uma nova devolução
  criarDevolucao: async (req, res) => {
    try {
      const { pedidoId, observacao, itensDevolucao } = req.body;

      // Validação básica
      if (!pedidoId) {
        return res.status(400).json({ error: 'Pedido é obrigatório' });
      }

      if (!itensDevolucao || !Array.isArray(itensDevolucao) || itensDevolucao.length === 0) {
        return res.status(400).json({ error: 'Itens de devolução são obrigatórios' });
      }

      // Verificar se o pedido existe
      const pedido = await prisma.pedido.findUnique({
        where: { id: Number(pedidoId) },
        include: {
          costureira: true,
          itensMaterial: true
        }
      });

      if (!pedido) {
        return res.status(404).json({ error: 'Pedido não encontrado' });
      }

      // Verificar se o pedido já tem devolução
      const devolucaoExistente = await prisma.devolucao.findUnique({
        where: { pedidoId: Number(pedidoId) }
      });

      if (devolucaoExistente) {
        return res.status(400).json({ error: 'Este pedido já possui uma devolução registrada' });
      }

      // Criar devolução e atualizar status do pedido em uma transação
      const novaDevolucao = await prisma.$transaction(async (prisma) => {
        // Criar a devolução
        const devolucao = await prisma.devolucao.create({
          data: {
            pedidoId: Number(pedidoId),
            costureiraId: pedido.costureiraId,
            observacao
          }
        });

        // Adicionar itens de devolução
        for (const item of itensDevolucao) {
          // Verificar se o material existe no pedido
          const materialPedido = pedido.itensMaterial.find(
            m => m.materialId === Number(item.materialId)
          );

          if (!materialPedido) {
            throw new Error(`Material com ID ${item.materialId} não encontrado no pedido`);
          }

          // Verificar se a quantidade devolvida não excede a quantidade enviada
          if (Number(item.quantidade) > materialPedido.quantidade) {
            throw new Error(`Quantidade devolvida (${item.quantidade}) excede a quantidade enviada (${materialPedido.quantidade}) para o material ${item.materialId}`);
          }

          await prisma.itemDevolucao.create({
            data: {
              devolucaoId: devolucao.id,
              materialId: Number(item.materialId),
              quantidade: Number(item.quantidade)
            }
          });

          // Atualizar a quantidade devolvida no item de material do pedido
          await prisma.itemMaterial.update({
            where: { id: materialPedido.id },
            data: {
              devolvido: Number(item.quantidade)
            }
          });
        }

        // Atualizar status do pedido para DEVOLVIDO
        await prisma.pedido.update({
          where: { id: Number(pedidoId) },
          data: { status: 'DEVOLVIDO' }
        });

        return devolucao;
      });

      // Buscar a devolução completa para retornar
      const devolucaoCompleta = await prisma.devolucao.findUnique({
        where: { id: novaDevolucao.id },
        include: {
          pedido: true,
          costureira: true,
          itensDevolucao: true
        }
      });

      res.status(201).json(devolucaoCompleta);
    } catch (error) {
      console.error('Erro ao criar devolução:', error);
      res.status(500).json({ error: `Erro ao criar devolução: ${error.message}` });
    }
  },

  // Atualizar uma devolução existente
  atualizarDevolucao: async (req, res) => {
    try {
      const { id } = req.params;
      const { observacao } = req.body;

      // Verificar se a devolução existe
      const devolucao = await prisma.devolucao.findUnique({
        where: { id: Number(id) }
      });

      if (!devolucao) {
        return res.status(404).json({ error: 'Devolução não encontrada' });
      }

      // Atualizar devolução
      const devolucaoAtualizada = await prisma.devolucao.update({
        where: { id: Number(id) },
        data: {
          observacao
        },
        include: {
          pedido: true,
          costureira: true,
          itensDevolucao: true
        }
      });

      res.json(devolucaoAtualizada);
    } catch (error) {
      console.error('Erro ao atualizar devolução:', error);
      res.status(500).json({ error: 'Erro ao atualizar devolução' });
    }
  },

  // Remover uma devolução
  removerDevolucao: async (req, res) => {
    try {
      const { id } = req.params;

      // Verificar se a devolução existe
      const devolucao = await prisma.devolucao.findUnique({
        where: { id: Number(id) },
        include: {
          pedido: true,
          itensDevolucao: true
        }
      });

      if (!devolucao) {
        return res.status(404).json({ error: 'Devolução não encontrada' });
      }

      // Remover devolução, itens de devolução e atualizar status do pedido em uma transação
      await prisma.$transaction(async (prisma) => {
        // Resetar as quantidades devolvidas nos itens de material do pedido
        for (const itemDevolucao of devolucao.itensDevolucao) {
          const itemMaterial = await prisma.itemMaterial.findFirst({
            where: {
              pedidoId: devolucao.pedidoId,
              materialId: itemDevolucao.materialId
            }
          });

          if (itemMaterial) {
            await prisma.itemMaterial.update({
              where: { id: itemMaterial.id },
              data: { devolvido: 0 }
            });
          }
        }

        // Remover os itens de devolução
        await prisma.itemDevolucao.deleteMany({
          where: { devolucaoId: Number(id) }
        });

        // Remover a devolução
        await prisma.devolucao.delete({
          where: { id: Number(id) }
        });

        // Atualizar status do pedido para FINALIZADO ou RECEBIDO
        const recebimento = await prisma.recebimento.findUnique({
          where: { pedidoId: devolucao.pedidoId }
        });

        await prisma.pedido.update({
          where: { id: devolucao.pedidoId },
          data: { status: recebimento ? 'FINALIZADO' : 'RECEBIDO' }
        });
      });

      res.json({ message: 'Devolução removida com sucesso' });
    } catch (error) {
      console.error('Erro ao remover devolução:', error);
      res.status(500).json({ error: 'Erro ao remover devolução' });
    }
  }
};

module.exports = devolucoesController;
