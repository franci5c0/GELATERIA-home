const express = require('express'); //importa o framework express

const router = express.Router(); //cria um novo roteador

const doceriaController = require('../controllers/doceriaController.js'); //importa o controlador de pedidos


//definindo uma rota para obter todos os pedidos
router.get('/', doceriaController.getAllCadastro);

//adicionando um cadastro
router.post('/', doceriaController.addCadastro);

//deletando um cadastro
router.delete('/:id', doceriaController.deleteCadastro)


//exportando o roteador
module.exports = router;