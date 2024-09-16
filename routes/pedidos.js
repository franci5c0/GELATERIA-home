
const express = require('express'); //importa o framework express

const router = express.Router(); //cria um novo roteador

//--PEDIDOS--//
const gelateriaController = require('../controllers/gelateriaController'); //importa o controlador de pedidos

//definindo uma rota para obter todos os pedidos
router.get('/', gelateriaController.getAllPedidos);

//definindo uma rota para adicionar um pedido
router.post('/', gelateriaController.addPedidos);

//definindo uma rota para deletar um pedido
router.delete('/:id', gelateriaController.deletePedidos);

//exportando o roteador
module.exports = router;