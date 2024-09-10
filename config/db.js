
//importar a biblioteca mysql2 e criar a conexão com o banco de dados
const mysql = require('mysql2'); //importa o pacote mysql2 para conectar ao banco de dados


//exibe as variáveis de ambiete carregadas
//console.log('DB_HOST:', process.env.DB_HOST);
//console.log('DB_USER:', process.env.DB_USER);
//console.log('DB_PASS:', process.env.DB_PASS);
//console.log('DB_NAME:', process.env.DB_NAME);
//pode comentar ou apagar se quiser


//definindo o banco de dados
const db = mysql.createConnection({ 
    host: process.env.DB_HOST, // Endereço do servidor de banco de dados 
    user: process.env.DB_USER, // Nome de usuário para acessar o banco de dados 
    password: process.env.DB_PASS, // Senha do usuário para acessar o banco de dados 
    database: process.env.DB_NAME // Nome do banco de dados a ser acessado 
    }); 


//------CONEXÃO COM O BANCO DE DADOS------//
db.connect((err) => {
if(err) {
    console.error('Erro ao conectar ao banco de dados:', err);//exibe mensagem de erro
    return;
        }
        console.log(`Conectado ao banco de dados MySQL ${process.env.DB_NAME}`);//exibe mensagem de sucesso
    }
);

