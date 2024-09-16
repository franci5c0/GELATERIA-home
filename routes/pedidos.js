
const express = require('express'); //importa o framework express

const router = express.Router(); //cria um novo roteador

//--PEDIDOS--//
const doceriaController = require('../controllers/doceriaController'); //importa o controlador de pedidos

//definindo uma rota para obter todos os pedidos
router.get('/', doceriaController.getAllPedidos);

//definindo uma rota para adicionar um pedido
router.post('/', doceriaController.addPedidos);

//definindo uma rota para deletar um pedido
router.delete('/:id', doceriaController.deletePedidos);

//exportando o roteador
module.exports = router;