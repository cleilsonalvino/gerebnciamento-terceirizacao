const express = require('express');
const router = express.Router();
const pedidosController = require('../controllers/pedidosController');

// Rotas para pedidos
router.get('/', pedidosController.listarPedidos);
router.get('/:id', pedidosController.obterPedido);
router.post('/', pedidosController.criarPedido);
router.put('/:id', pedidosController.atualizarPedido);
router.put('/:id/status', pedidosController.atualizarStatusPedido);
router.delete('/:id', pedidosController.removerPedido);

module.exports = router;
