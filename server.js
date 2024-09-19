
//importando e armazenando a dotenv na constante dotenv
const dotenv = require('dotenv');//importa o pacote doenv para gerenciar variáveis de ambiente

dotenv.config();//carrega as variáveis definidas no arquivo .env para process.env

//IMPORTANDO AS BIBLIOTECAS
const express = require('express');//importa o framework express


//importando e armazenando o cors na constante cors
const cors = require('cors');//importa o pacote cors para permitir requisições de diferentes origens


//importando e armazenando o body-parser na constante bodyParser
const bodyParser = require('body-parser');//importa o pacote body-parser para analisar o corpo das requisições HTTP

const db = require('./config/db');//importa a conexão com o banco de dados

const boloRoutes = require('./routes/bolos');//importa a rota da tabela de bolos

const pedidosRoutes = require('./routes/pedidos')//importa a rota da tabela de pedidos

//ANOTAÇÕES//

//o EXPRESS é utilizado para criar e gerenciar servidores web e APIs

//o DOTENV é utilizado para gerenciar variáveis de ambiente, como credenciais de banco de dados

//o BODY-PARSER é utilizado para analisar o corpo das requisições HTTP, permitindo que o servidor manipule dados enviados pelo cliente


//CONFIGURANDO AS VARIÁVEIS DE AMBIENTE
dotenv.config();//carrega as variáveis definidas no arquivo .env para process.env

//INICIALIZANDO UMA NOVA APLICAÇÃO EXPRESS
const app = express();//inicializa uma nova aplicação express

//CONFIGURANDO O CORS E O BODY-PARSER
app.use(cors());//habilita o CORS para todas as rotas
app.use(bodyParser.json());//configura o body-parser para analisar requisições JSON

//usar as rotas da tabela para todas as requisições que começam com /api/bolos
app.use('/api/bolos', boloRoutes);

//usar tas rotas da tabela de pedidos para todas as requisições que começam com /api/pedidos
app.use('/api/pedidos', pedidosRoutes);

//ROTA INICIAL PARA TESTAR O SERVIDOR
app.get('/',(req, res) => {
res.send('o servidor está rodando');//define uma rota inicial para testar o servidor
});

// Configura o servidor para escutar em uma porta específica 
const PORT = process.env.PORT || 3000; // Define a porta a par r da variável de ambiente ou usa a porta 3000 como padrão 
app.listen(PORT,() => {
console.log(`servidor rodando na porta ${PORT}`);
}); //escreve uma mensagem informando que o servidor está rodando
