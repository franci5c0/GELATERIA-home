const express = require('express'); //importa o framework express

const router = express.Router(); //cria um novo roteador

const gelateriaController = require('../controllers/gelateriaController.js'); //importa o controlador de pedidos


//definindo uma rota para obter todos os pedidos
router.get('/', gelateriaController.getAllCadastro);

//adicionando um cadastro
router.post('/', gelateriaController.addCadastro);

//deletando um cadastro
router.delete('/:id', gelateriaController.deleteCadastro)


//exportando o roteador
module.exports = router;