const prisma = require('../prismaClient');

// Controlador para produtos
const produtosController = {
  // Listar todos os produtos
  listarProdutos: async (req, res) => {
    try {
      const produtos = await prisma.produto.findMany({
        where: { ativo: true }
      });
      res.json(produtos);
    } catch (error) {
      console.error('Erro ao listar produtos:', error);
      res.status(500).json({ error: 'Erro ao listar produtos' });
    }
  },

  // Obter um produto específico
  obterProduto: async (req, res) => {
    try {
      const { id } = req.params;
      const produto = await prisma.produto.findUnique({
        where: { id: Number(id) },
        include: {
          itensPedido: true
        }
      });

      if (!produto) {
        return res.status(404).json({ error: 'Produto não encontrado' });
      }

      res.json(produto);
    } catch (error) {
      console.error('Erro ao obter produto:', error);
      res.status(500).json({ error: 'Erro ao obter produto' });
    }
  },

  // Criar um novo produto
  criarProduto: async (req, res) => {
    try {
      const { nome, descricao, valorUnitario } = req.body;

      // Validação básica
      if (!nome) {
        return res.status(400).json({ error: 'Nome é obrigatório' });
      }

      if (!valorUnitario || isNaN(valorUnitario) || valorUnitario <= 0) {
        return res.status(400).json({ error: 'Valor unitário deve ser um número positivo' });
      }

      const novoProduto = await prisma.produto.create({
        data: {
          nome,
          descricao,
          valorUnitario: Number(valorUnitario)
        }
      });

      res.status(201).json(novoProduto);
    } catch (error) {
      console.error('Erro ao criar produto:', error);
      res.status(500).json({ error: 'Erro ao criar produto' });
    }
  },

  // Atualizar um produto existente
  atualizarProduto: async (req, res) => {
    try {
      const { id } = req.params;
      const { nome, descricao, valorUnitario, ativo } = req.body;

      // Verificar se o produto existe
      const produto = await prisma.produto.findUnique({
        where: { id: Number(id) }
      });

      if (!produto) {
        return res.status(404).json({ error: 'Produto não encontrado' });
      }

      // Validação do valor unitário
      if (valorUnitario !== undefined && (isNaN(valorUnitario) || valorUnitario <= 0)) {
        return res.status(400).json({ error: 'Valor unitário deve ser um número positivo' });
      }

      // Atualizar produto
      const produtoAtualizado = await prisma.produto.update({
        where: { id: Number(id) },
        data: {
          nome,
          descricao,
          valorUnitario: valorUnitario !== undefined ? Number(valorUnitario) : undefined,
          ativo
        }
      });

      res.json(produtoAtualizado);
    } catch (error) {
      console.error('Erro ao atualizar produto:', error);
      res.status(500).json({ error: 'Erro ao atualizar produto' });
    }
  },

  // Remover um produto (soft delete)
  removerProduto: async (req, res) => {
    try {
      const { id } = req.params;

      // Verificar se o produto existe
      const produto = await prisma.produto.findUnique({
        where: { id: Number(id) }
      });

      if (!produto) {
        return res.status(404).json({ error: 'Produto não encontrado' });
      }

      // Soft delete (marcar como inativo)
      await prisma.produto.update({
        where: { id: Number(id) },
        data: { ativo: false }
      });

      res.json({ message: 'Produto removido com sucesso' });
    } catch (error) {
      console.error('Erro ao remover produto:', error);
      res.status(500).json({ error: 'Erro ao remover produto' });
    }
  }
};

module.exports = produtosController;
