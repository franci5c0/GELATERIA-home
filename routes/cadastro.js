const express=require('express');//importa o framework express
const router=express.Router();//cria um novo roteado
const doceriaController=require('../controllers/doceriaController')//importa o controlador das tabelas

const authMiddleware = require('../middlewares/authMiddleware'); // Importa o middleware de autenticação 

// Definindo uma rota para obter todas as transações (protegida) 
router.get('/', authMiddleware, doceriaController.getAllCadastro); 

// Definindo uma rota para adicionar uma nova transação (protegida) 
router.post('/', authMiddleware, doceriaController.addCadastro); 

// Definindo uma rota para deletar uma transação existente (protegida) 
router.delete('/:id', authMiddleware, doceriaController.deleteCadastro);

//EXPORTANDO O ROTEADOR
module.exports=router;