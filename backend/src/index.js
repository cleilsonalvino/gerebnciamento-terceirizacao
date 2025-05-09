const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const { PrismaClient } = require('../generated/prisma');

const app = express();
const prisma = new PrismaClient();
const PORT = process.env.PORT || 3001;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Rotas
app.get('/', (req, res) => {
  res.json({ message: 'API do Sistema de Gerenciamento de Terceirização de Confecção' });
});

// Importar rotas
const costureirasRoutes = require('./routes/costureiras');
const produtosRoutes = require('./routes/produtos');
const materiaisRoutes = require('./routes/materiais');
const pedidosRoutes = require('./routes/pedidos');
const recebimentosRoutes = require('./routes/recebimentos');
const devolucoesRoutes = require('./routes/devolucoes');
const pagamentosRoutes = require('./routes/pagamentos');

// Usar rotas
app.use('/api/costureiras', costureirasRoutes);
app.use('/api/produtos', produtosRoutes);
app.use('/api/materiais', materiaisRoutes);
app.use('/api/pedidos', pedidosRoutes);
app.use('/api/recebimentos', recebimentosRoutes);
app.use('/api/devolucoes', devolucoesRoutes);
app.use('/api/pagamentos', pagamentosRoutes);

// Middleware de tratamento de erros
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({
    message: 'Ocorreu um erro no servidor',
    error: process.env.NODE_ENV === 'development' ? err.message : {}
  });
});

// Iniciar servidor
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});

// Exportar prisma client para uso em outros arquivos
module.exports = { prisma };
