const express = require('express');
const router = express.Router();
const materiaisController = require('../controllers/materiaisController');

// Rotas para materiais
router.get('/', materiaisController.listarMateriais);
router.get('/:id', materiaisController.obterMaterial);
router.post('/', materiaisController.criarMaterial);
router.put('/:id', materiaisController.atualizarMaterial);
router.delete('/:id', materiaisController.removerMaterial);

module.exports = router;
