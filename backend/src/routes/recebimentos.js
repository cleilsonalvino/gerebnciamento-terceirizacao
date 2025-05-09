const express = require('express');
const router = express.Router();
const recebimentosController = require('../controllers/recebimentosController');

// Rotas para recebimentos
router.get('/', recebimentosController.listarRecebimentos);
router.get('/:id', recebimentosController.obterRecebimento);
router.post('/', recebimentosController.criarRecebimento);
router.put('/:id', recebimentosController.atualizarRecebimento);
router.delete('/:id', recebimentosController.removerRecebimento);

module.exports = router;
