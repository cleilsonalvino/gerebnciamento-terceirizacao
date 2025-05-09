const prisma = require('../prismaClient');

// Controlador para materiais
const materiaisController = {
  // Listar todos os materiais
  listarMateriais: async (req, res) => {
    try {
      const materiais = await prisma.material.findMany({
        where: { ativo: true }
      });
      res.json(materiais);
    } catch (error) {
      console.error('Erro ao listar materiais:', error);
      res.status(500).json({ error: 'Erro ao listar materiais' });
    }
  },

  // Obter um material específico
  obterMaterial: async (req, res) => {
    try {
      const { id } = req.params;
      const material = await prisma.material.findUnique({
        where: { id: Number(id) },
        include: {
          itensMaterial: true
        }
      });

      if (!material) {
        return res.status(404).json({ error: 'Material não encontrado' });
      }

      res.json(material);
    } catch (error) {
      console.error('Erro ao obter material:', error);
      res.status(500).json({ error: 'Erro ao obter material' });
    }
  },

  // Criar um novo material
  criarMaterial: async (req, res) => {
    try {
      const { nome, descricao, unidadeMedida } = req.body;

      // Validação básica
      if (!nome) {
        return res.status(400).json({ error: 'Nome é obrigatório' });
      }

      if (!unidadeMedida) {
        return res.status(400).json({ error: 'Unidade de medida é obrigatória' });
      }

      const novoMaterial = await prisma.material.create({
        data: {
          nome,
          descricao,
          unidadeMedida
        }
      });

      res.status(201).json(novoMaterial);
    } catch (error) {
      console.error('Erro ao criar material:', error);
      res.status(500).json({ error: 'Erro ao criar material' });
    }
  },

  // Atualizar um material existente
  atualizarMaterial: async (req, res) => {
    try {
      const { id } = req.params;
      const { nome, descricao, unidadeMedida, ativo } = req.body;

      // Verificar se o material existe
      const material = await prisma.material.findUnique({
        where: { id: Number(id) }
      });

      if (!material) {
        return res.status(404).json({ error: 'Material não encontrado' });
      }

      // Atualizar material
      const materialAtualizado = await prisma.material.update({
        where: { id: Number(id) },
        data: {
          nome,
          descricao,
          unidadeMedida,
          ativo
        }
      });

      res.json(materialAtualizado);
    } catch (error) {
      console.error('Erro ao atualizar material:', error);
      res.status(500).json({ error: 'Erro ao atualizar material' });
    }
  },

  // Remover um material (soft delete)
  removerMaterial: async (req, res) => {
    try {
      const { id } = req.params;

      // Verificar se o material existe
      const material = await prisma.material.findUnique({
        where: { id: Number(id) }
      });

      if (!material) {
        return res.status(404).json({ error: 'Material não encontrado' });
      }

      // Soft delete (marcar como inativo)
      await prisma.material.update({
        where: { id: Number(id) },
        data: { ativo: false }
      });

      res.json({ message: 'Material removido com sucesso' });
    } catch (error) {
      console.error('Erro ao remover material:', error);
      res.status(500).json({ error: 'Erro ao remover material' });
    }
  }
};

module.exports = materiaisController;
