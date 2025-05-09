const express = require('express');
const router = express.Router();
const devolucoesController = require('../controllers/devolucoesController');

// Rotas para devoluções
router.get('/', devolucoesController.listarDevolucoes);
router.get('/:id', devolucoesController.obterDevolucao);
router.post('/', devolucoesController.criarDevolucao);
router.put('/:id', devolucoesController.atualizarDevolucao);
router.delete('/:id', devolucoesController.removerDevolucao);

module.exports = router;
