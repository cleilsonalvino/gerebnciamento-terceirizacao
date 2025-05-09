const prisma = require('../prismaClient');

// Controlador para pagamentos
const pagamentosController = {
  // Listar todos os pagamentos
  listarPagamentos: async (req, res) => {
    try {
      const pagamentos = await prisma.pagamento.findMany({
        include: {
          costureira: true,
          itensPagamento: true
        },
        orderBy: {
          dataPagamento: 'desc'
        }
      });
      res.json(pagamentos);
    } catch (error) {
      console.error('Erro ao listar pagamentos:', error);
      res.status(500).json({ error: 'Erro ao listar pagamentos' });
    }
  },

  // Obter um pagamento específico
  obterPagamento: async (req, res) => {
    try {
      const { id } = req.params;
      const pagamento = await prisma.pagamento.findUnique({
        where: { id: Number(id) },
        include: {
          costureira: true,
          itensPagamento: true
        }
      });

      if (!pagamento) {
        return res.status(404).json({ error: 'Pagamento não encontrado' });
      }

      res.json(pagamento);
    } catch (error) {
      console.error('Erro ao obter pagamento:', error);
      res.status(500).json({ error: 'Erro ao obter pagamento' });
    }
  },

  // Listar pagamentos por costureira
  listarPagamentosPorCostureira: async (req, res) => {
    try {
      const { costureiraId } = req.params;
      const pagamentos = await prisma.pagamento.findMany({
        where: { costureiraId: Number(costureiraId) },
        include: {
          itensPagamento: true
        },
        orderBy: {
          dataPagamento: 'desc'
        }
      });
      res.json(pagamentos);
    } catch (error) {
      console.error('Erro ao listar pagamentos por costureira:', error);
      res.status(500).json({ error: 'Erro ao listar pagamentos por costureira' });
    }
  },

  // Calcular valor a ser pago por um pedido
  calcularValorPedido: async (req, res) => {
    try {
      const { pedidoId } = req.params;
      
      // Verificar se o pedido existe
      const pedido = await prisma.pedido.findUnique({
        where: { id: Number(pedidoId) },
        include: {
          itensPedido: {
            include: {
              produto: true
            }
          }
        }
      });

      if (!pedido) {
        return res.status(404).json({ error: 'Pedido não encontrado' });
      }

      // Calcular valor total
      let valorTotal = 0;
      const itensCalculados = [];

      for (const item of pedido.itensPedido) {
        const valorItem = item.quantidade * item.valorUnitario;
        valorTotal += valorItem;
        
        itensCalculados.push({
          produtoId: item.produtoId,
          nomeProduto: item.produto.nome,
          quantidade: item.quantidade,
          valorUnitario: item.valorUnitario,
          valorTotal: valorItem
        });
      }

      res.json({
        pedidoId: pedido.id,
        costureiraId: pedido.costureiraId,
        itens: itensCalculados,
        valorTotal
      });
    } catch (error) {
      console.error('Erro ao calcular valor do pedido:', error);
      res.status(500).json({ error: 'Erro ao calcular valor do pedido' });
    }
  },

  // Criar um novo pagamento
  criarPagamento: async (req, res) => {
    try {
      const { costureiraId, pedidoIds, observacao } = req.body;

      // Validação básica
      if (!costureiraId) {
        return res.status(400).json({ error: 'Costureira é obrigatória' });
      }

      if (!pedidoIds || !Array.isArray(pedidoIds) || pedidoIds.length === 0) {
        return res.status(400).json({ error: 'Pedidos são obrigatórios' });
      }

      // Verificar se a costureira existe
      const costureira = await prisma.costureira.findUnique({
        where: { id: Number(costureiraId) }
      });

      if (!costureira) {
        return res.status(404).json({ error: 'Costureira não encontrada' });
      }

      // Criar pagamento com transação para garantir consistência
      const novoPagamento = await prisma.$transaction(async (prisma) => {
        let valorTotalPagamento = 0;
        const itensPagamento = [];

        // Processar cada pedido
        for (const pedidoId of pedidoIds) {
          // Verificar se o pedido existe e pertence à costureira
          const pedido = await prisma.pedido.findFirst({
            where: { 
              id: Number(pedidoId),
              costureiraId: Number(costureiraId),
              status: 'FINALIZADO'
            },
            include: {
              itensPedido: {
                include: {
                  produto: true
                }
              }
            }
          });

          if (!pedido) {
            throw new Error(`Pedido ${pedidoId} não encontrado, não pertence à costureira ou não está finalizado`);
          }

          // Verificar se o pedido já foi pago
          const pagamentoExistente = await prisma.itemPagamento.findFirst({
            where: { pedidoId: Number(pedidoId) }
          });

          if (pagamentoExistente) {
            throw new Error(`Pedido ${pedidoId} já foi pago anteriormente`);
          }

          // Calcular valor total do pedido
          for (const item of pedido.itensPedido) {
            const valorItem = item.quantidade * item.valorUnitario;
            valorTotalPagamento += valorItem;
            
            itensPagamento.push({
              pedidoId: Number(pedidoId),
              produtoId: item.produtoId,
              quantidade: item.quantidade,
              valorUnitario: item.valorUnitario,
              valorTotal: valorItem
            });
          }
        }

        // Criar o pagamento
        const pagamento = await prisma.pagamento.create({
          data: {
            costureiraId: Number(costureiraId),
            valorTotal: valorTotalPagamento,
            observacao
          }
        });

        // Adicionar itens de pagamento
        for (const item of itensPagamento) {
          await prisma.itemPagamento.create({
            data: {
              pagamentoId: pagamento.id,
              pedidoId: item.pedidoId,
              produtoId: item.produtoId,
              quantidade: item.quantidade,
              valorUnitario: item.valorUnitario,
              valorTotal: item.valorTotal
            }
          });
        }

        return pagamento;
      });

      // Buscar o pagamento completo para retornar
      const pagamentoCompleto = await prisma.pagamento.findUnique({
        where: { id: novoPagamento.id },
        include: {
          costureira: true,
          itensPagamento: true
        }
      });

      res.status(201).json(pagamentoCompleto);
    } catch (error) {
      console.error('Erro ao criar pagamento:', error);
      res.status(500).json({ error: `Erro ao criar pagamento: ${error.message}` });
    }
  },

  // Atualizar um pagamento existente
  atualizarPagamento: async (req, res) => {
    try {
      const { id } = req.params;
      const { observacao } = req.body;

      // Verificar se o pagamento existe
      const pagamento = await prisma.pagamento.findUnique({
        where: { id: Number(id) }
      });

      if (!pagamento) {
        return res.status(404).json({ error: 'Pagamento não encontrado' });
      }

      // Atualizar pagamento
      const pagamentoAtualizado = await prisma.pagamento.update({
        where: { id: Number(id) },
        data: {
          observacao
        },
        include: {
          costureira: true,
          itensPagamento: true
        }
      });

      res.json(pagamentoAtualizado);
    } catch (error) {
      console.error('Erro ao atualizar pagamento:', error);
      res.status(500).json({ error: 'Erro ao atualizar pagamento' });
    }
  },

  // Remover um pagamento
  removerPagamento: async (req, res) => {
    try {
      const { id } = req.params;

      // Verificar se o pagamento existe
      const pagamento = await prisma.pagamento.findUnique({
        where: { id: Number(id) },
        include: {
          itensPagamento: true
        }
      });

      if (!pagamento) {
        return res.status(404).json({ error: 'Pagamento não encontrado' });
      }

      // Remover pagamento e seus itens em uma transação
      await prisma.$transaction(async (prisma) => {
        // Remover os itens de pagamento
        await prisma.itemPagamento.deleteMany({
          where: { pagamentoId: Number(id) }
        });

        // Remover o pagamento
        await prisma.pagamento.delete({
          where: { id: Number(id) }
        });
      });

      res.json({ message: 'Pagamento removido com sucesso' });
    } catch (error) {
      console.error('Erro ao remover pagamento:', error);
      res.status(500).json({ error: 'Erro ao remover pagamento' });
    }
  }
};

module.exports = pagamentosController;
