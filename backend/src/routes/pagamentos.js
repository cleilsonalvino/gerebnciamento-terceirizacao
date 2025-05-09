const express = require('express');
const router = express.Router();
const pagamentosController = require('../controllers/pagamentosController');

// Rotas para pagamentos
router.get('/', pagamentosController.listarPagamentos);
router.get('/:id', pagamentosController.obterPagamento);
router.post('/', pagamentosController.criarPagamento);
router.put('/:id', pagamentosController.atualizarPagamento);
router.delete('/:id', pagamentosController.removerPagamento);
router.get('/costureira/:costureiraId', pagamentosController.listarPagamentosPorCostureira);
router.get('/calcular/:pedidoId', pagamentosController.calcularValorPedido);

module.exports = router;
