const express = require('express'); //importa o framework express

const router = express.Router(); //cria um novo roteador

const doceriaController = require('../controllers/doceriaController'); //importa o controlador de pedidos

//definindo uma rota para obter todos os pedidos
router.get('/', doceriaController.getAllBolos);

//exportando o roteador
module.exports = router;