const express=require('express');//importa o framework express
const router=express.Router();//cria um novo roteado
const doceriaController=require('../controllers/doceriaController')//importa o controlador das tabelas

//DEFININDO UMA ROTA PARA OBTER TODAS AS FORMAS DE PAGAMENTO
router.get('/', doceriaController.getAllPagamento);

//DEFININDO UMA ROTA PARA ADICIONAR UMA FORMA DE PAGAMENTO
router.post('/', doceriaController.addPagamento);

//EXPORTANDO O ROTEADOR
module.exports=router;