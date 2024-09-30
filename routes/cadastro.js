const express=require('express');//importa o framework express
const router=express.Router();//cria um novo roteado
const doceriaController=require('../controllers/doceriaController')//importa o controlador das tabelas

//DEFININDO UMA ROTA PARA OBTER TODOS OS CADASTROS DA TABELA
router.get('/', doceriaController.getAllCadastro);

router.post('/', doceriaController.addCadastro);

//DEFININDO UMA ROTA PARA DELETAR UM CADASTRO EXISTENTE
router.delete('/:id', doceriaController.deleteCadastro); 

//EXPORTANDO O ROTEADOR
module.exports=router;