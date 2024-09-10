
const express = require('express'); //importa o framework express

const router = express.Router(); //cria um novo roteador

const gelateriaController = require('../controllers/gelateriaController'); //importa o controlador de pedidos

//definindo uma rota para obter todos os pagamento
router.get('/', gelateriaController.getAllPagamento);

//definindo uma rota para adicionar um pagamento
router.post('/', gelateriaController.addPagamento);

//definindo uma rota para deletar um pagamento
router.delete('/:id', gelateriaController.deletePagamento);


//exportando o roteador

module.exports = router;