//importar bibliotecas
const express = require('express');

//inicie com dotenv
const dotenv = require('dotenv'); //importa o pacote dotenv para gerenciar variáveis de ambiente

//importar pacotes
const cors = require ('cors'); //importa o pacote cors para permitir requisições de diferentes origens
const bodyParser = require('body-parser') //importa o pacote body-parser para analisar o corpo das requisições

//variáveis de ambiente
dotenv.config(); //carrega as variáveis definidas no arquivo .env para process.env

//inicializa uma nova aplicação express
const app = express();

//conectando o banco de dados
const db = require('./config/db');//importa a conexão com o banco de dados

//PEDIDOS--------------//
const pedidosRoutes = require('./routes/pedidos'); //importa as rotas dos pedidos

//CADASTRO-------------//
const cadastroRoutes = require('./routes/cadastro'); //importa as rotas do cadastro

//SABORES--------------//
const bolosRoutes = require('./routes/bolos'); //importa as rotas dos sabores

//CARRINHO------------//
const carrinhoRoutes = require('./routes/carrinho'); //importa as rotas do carrinho

//PAGAMENTO------------//
const pagamentoRoutes = require('./routes/pagamento'); //importa as rotas do pagamento


//configura o CORS e o body-parser
app.use(cors()); //configura o body-parser para analisar requisições JSON
app.use(bodyParser.json());//configura o body-parser para analisar requisições JSON


//usar as rotas de transações para todas as requisições que começam com /api/pedidos
app.use('/api/pedidos', pedidosRoutes)
 
////usar as rotas de transações para todas as requisições que começam com /api/carrinho
app.use('/api/carrinho', carrinhoRoutes)

//usar as rotas de transações para todas as requisições que começam com /api/cadastro
app.use('/api/cadastro', cadastroRoutes)

//usar as rotas de transações para todas as requisições que começam com /api/sabores
app.use('/api/bolos', bolosRoutes)

//usar as rotas de transações para todas as requisições que começam com /api/pagamento
app.use('/api/pagamento', pagamentoRoutes)

//rota inicial para testar servidor
app.get('/',(req, res) => {
    res.send('A doceria tá aberta');//define uma rota inicial para testar o servidor
});


//configura o servidor para executar uma porta específica
const PORT = process.env.PORT || 3000; //define a porta a partir da variável de ambiente ou usa a porta 3000 como padrão
app.listen(PORT, () => {
   console.log(`Servidor rodando na porta ${PORT}`) 
}); //escreve uma mensagem informando que o servidor está rodando
