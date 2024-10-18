
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

const carrinhoRoutes = require('./routes/carrinho');//importa a rota do carrinho

const pagamentoRoutes = require('./routes/pagamento')//importa a rota da forma de pagamento

const donutRoutes = require('./routes/donuts');//importa a rota da forma dos donuts

const cupcakeRoutes = require('./routes/cupcakes');//importa a rota da forma dos cupcakes

//INICIALIZANDO UMA NOVA APLICAÇÃO EXPRESS
const app = express();//inicializa uma nova aplicação express

//CONFIGURANDO O CORS E O BODY-PARSER
app.use(cors());//habilita o CORS para todas as rotas
app.use(bodyParser.json());//configura o body-parser para analisar requisições JSON

//usar as rotas da tabela para todas as requisições que começam com /api/bolos
app.use('/api/bolos', boloRoutes);

app.use('/api/pedidos', pedidosRoutes);

app.use('/api/carrinho', carrinhoRoutes);

app.use('/api/pagamento', pagamentoRoutes);

app.use('/api/donuts', donutRoutes);

app.use('/api/cupcakes', cupcakeRoutes);

// Servir arquivos estáticos da pasta 'public'
app.use(express.static('public')); // Configura o middleware 'express.static' para servir arquivos estáticos (como HTML, CSS, JS, imagens) da pasta 'public'.


// //ROTA INICIAL PARA TESTAR O SERVIDOR
//  app.get('/',(req, res) => {
// res.send('o servidor está rodando');//define uma rota inicial para testar o servidor
//  });
  
  // Servir arquivos CSS da pasta 'css'
app.use('/css', express.static('css')); // Serve arquivos CSS

// Servir arquivos JS da pasta 'js'
app.use('/js', express.static('js')); // Serve arquivos JS

// Servir imagens da pasta 'images'
app.use('/imagens', express.static('imagens')); // Serve arquivos de imagem

// Define uma rota GET para o caminho raiz ('/'), que envia o arquivo 'index.html' da pasta 'public' como resposta ao cliente.
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/public/index.html'); // Servir o arquivo index.html como a página inicial
  });
  
// Configura o servidor para escutar em uma porta específica 
const PORT = process.env.PORT || 3500; // Define a porta a par r da variável de ambiente ou usa a porta 3000 como padrão 
app.listen(PORT,() => {
console.log(`servidor rodando na porta ${PORT}`);
}); //escreve uma mensagem informando que o servidor está rodando
