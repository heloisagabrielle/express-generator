const express = require('express');
const router = express.Router();
const usuariosController = require('../controllers/usuariosControllers');

/* GET users listing. */
router.get('/', usuariosController.index);

module.exports = router;
