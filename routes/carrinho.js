
const express = require('express'); //importa o framework express

const router = express.Router(); //cria um novo roteador

const doceriaController = require('../controllers/doceriaController'); //importa o controlador de pedidos

//definindo uma rota para deletar um pedido (CARRINHO)
router.delete('/:id', doceriaController.deleteCarrinho);

//definindo uma rota para adicionar um pedido(CARRINHO)
router.post('/', doceriaController.addCarrinho);

//definindo uma rota para obter todos os pedidos
router.get('/', doceriaController.getAllCarrinho);

//exportando o roteador
module.exports = router;