//IMPORTANDO A BIBLIOTECA MYSQL2 E CRIANDO A CONEXÃO COM O BANCO DE DADOS
const mysql = require('mysql2');//importa o pacote mysql2 para conectar ao banco de dados

//EXIBINDO VARIÁVEIS DE AMBIENTE CARREGADAS
console.log('DB_HOST:', process.env.DB_HOST);
console.log('DB_USER:', process.env.DB_USER); 
console.log('DB_PASS:', process.env.DB_PASS); 
console.log('DB_NAME:', process.env.DB_NAME); 
//depois pode apagar 

const db = mysql.createConnection({ 
host:process.env.DB_HOST, // Endereço do servidor de banco de dados 
user:process.env.DB_USER, // Nome de usuário para acessar o banco de dados 
password:process.env.DB_PASS, // Senha do usuário para acessar o banco de dados 
database:process.env.DB_NAME // Nome do banco de dados a ser acessado 
}); 


//CONECTANDO AO BANCO DE DADOS E EXPORTANDO A CONEXÃO
db.connect((err) => {
if(err) {
    console.error('Erro ao conectar ao banco de dados:', err)//exibe mensagem de erro
return;
}
console.log('Conectado ao banco de dados MySQL');//exibe mensagem de sucesso
});

module.exports=db;//exporta a conexão para ser usada em outros arquivos