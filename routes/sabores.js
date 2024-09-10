const express = require('express'); //importa o framework express

const router = express.Router(); //cria um novo roteador

const gelateriaController = require('../controllers/gelateriaController'); //importa o controlador de pedidos

//definindo uma rota para obter todos os pedidos
router.get('/', gelateriaController.getAllSabores);


//exportando o roteador
module.exports = router;