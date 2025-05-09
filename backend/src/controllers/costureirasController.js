const prisma = require('../prismaClient');

// Controlador para costureiras
const costureirasController = {
  // Listar todas as costureiras
  listarCostureiras: async (req, res) => {
    try {
      const costureiras = await prisma.costureira.findMany({
        where: { ativo: true }
      });
      res.json(costureiras);
    } catch (error) {
      console.error('Erro ao listar costureiras:', error);
      res.status(500).json({ error: 'Erro ao listar costureiras' });
    }
  },

  // Obter uma costureira específica
  obterCostureira: async (req, res) => {
    try {
      const { id } = req.params;
      const costureira = await prisma.costureira.findUnique({
        where: { id: Number(id) },
        include: {
          pedidos: true,
          recebimentos: true,
          devolucoes: true,
          pagamentos: true
        }
      });

      if (!costureira) {
        return res.status(404).json({ error: 'Costureira não encontrada' });
      }

      res.json(costureira);
    } catch (error) {
      console.error('Erro ao obter costureira:', error);
      res.status(500).json({ error: 'Erro ao obter costureira' });
    }
  },

  // Criar uma nova costureira
  criarCostureira: async (req, res) => {
    try {
      const { nome, telefone, email, endereco, cpf } = req.body;

      // Validação básica
      if (!nome) {
        return res.status(400).json({ error: 'Nome é obrigatório' });
      }

      const novaCostureira = await prisma.costureira.create({
        data: {
          nome,
          telefone,
          email,
          endereco,
          cpf
        }
      });

      res.status(201).json(novaCostureira);
    } catch (error) {
      console.error('Erro ao criar costureira:', error);
      
      // Verificar se é erro de chave única (CPF duplicado)
      if (error.code === 'P2002') {
        return res.status(400).json({ error: 'CPF já cadastrado' });
      }
      
      res.status(500).json({ error: 'Erro ao criar costureira' });
    }
  },

  // Atualizar uma costureira existente
  atualizarCostureira: async (req, res) => {
    try {
      const { id } = req.params;
      const { nome, telefone, email, endereco, cpf, ativo } = req.body;

      // Verificar se a costureira existe
      const costureira = await prisma.costureira.findUnique({
        where: { id: Number(id) }
      });

      if (!costureira) {
        return res.status(404).json({ error: 'Costureira não encontrada' });
      }

      // Atualizar costureira
      const costureiraAtualizada = await prisma.costureira.update({
        where: { id: Number(id) },
        data: {
          nome,
          telefone,
          email,
          endereco,
          cpf,
          ativo
        }
      });

      res.json(costureiraAtualizada);
    } catch (error) {
      console.error('Erro ao atualizar costureira:', error);
      
      // Verificar se é erro de chave única (CPF duplicado)
      if (error.code === 'P2002') {
        return res.status(400).json({ error: 'CPF já cadastrado' });
      }
      
      res.status(500).json({ error: 'Erro ao atualizar costureira' });
    }
  },

  // Remover uma costureira (soft delete)
  removerCostureira: async (req, res) => {
    try {
      const { id } = req.params;

      // Verificar se a costureira existe
      const costureira = await prisma.costureira.findUnique({
        where: { id: Number(id) }
      });

      if (!costureira) {
        return res.status(404).json({ error: 'Costureira não encontrada' });
      }

      // Soft delete (marcar como inativo)
      await prisma.costureira.update({
        where: { id: Number(id) },
        data: { ativo: false }
      });

      res.json({ message: 'Costureira removida com sucesso' });
    } catch (error) {
      console.error('Erro ao remover costureira:', error);
      res.status(500).json({ error: 'Erro ao remover costureira' });
    }
  }
};

module.exports = costureirasController;
