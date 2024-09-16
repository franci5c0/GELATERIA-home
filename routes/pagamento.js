
const express = require('express'); //importa o framework express

const router = express.Router(); //cria um novo roteador

const doceriaController = require('../controllers/doceriaController'); //importa o controlador de pedidos

//definindo uma rota para obter todos os pagamento
router.get('/', doceriaController.getAllPagamento);

//definindo uma rota para adicionar um pagamento
router.post('/', doceriaController.addPagamento);

//definindo uma rota para deletar um pagamento
router.delete('/:id', doceriaController.deletePagamento);


//exportando o roteador

module.exports = router;