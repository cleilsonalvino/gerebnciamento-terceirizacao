const express = require('express');
const router = express.Router();
const costureirasController = require('../controllers/costureirasController');

// Rotas para costureiras
router.get('/', costureirasController.listarCostureiras);
router.get('/:id', costureirasController.obterCostureira);
router.post('/', costureirasController.criarCostureira);
router.put('/:id', costureirasController.atualizarCostureira);
router.delete('/:id', costureirasController.removerCostureira);

module.exports = router;
