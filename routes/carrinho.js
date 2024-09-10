
const express = require('express'); //importa o framework express

const router = express.Router(); //cria um novo roteador

const gelateriaController = require('../controllers/gelateriaController'); //importa o controlador de pedidos

//definindo uma rota para deletar um pedido (CARRINHO)
router.delete('/:id', gelateriaController.deleteCarrinho);

//definindo uma rota para adicionar um pedido(CARRINHO)
router.post('/', gelateriaController.addCarrinho);

//definindo uma rota para obter todos os pedidos
router.get('/', gelateriaController.getAllCarrinho);

//exportando o roteador
module.exports = router;