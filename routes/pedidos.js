const express=require('express');//importa o framework express
const router=express.Router();//cria um novo roteado
const doceriaController=require('../controllers/doceriaController')//importa o controlador das tabelas

//DEFININDO UMA ROTA PARA OBTER TODOS OS BOLOS DA TABELA
router.get('/', doceriaController.getAllPedidos);

//DEFININDO UMA ROTA PARA ADICIONAR UM PEDIDO
router.post('/', doceriaController.addPedidos);

//DEFININDO UMA ROTA PARA ATUALIZAR UM PEDIDO EXISTENTE (atualização completa)
router.put('/:id', doceriaController.updatePedidosPut);

//DEFININDO UMA ROTA PARA DELETAR UM PEDIDO EXISTENTE
router.delete('/:id', doceriaController.deletePedidos); 

//EXPORTANDO O ROTEADOR
module.exports=router;