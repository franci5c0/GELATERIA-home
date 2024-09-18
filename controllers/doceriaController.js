const db = require('../config/db');//importa a conexão com o banco de dados

//FUNÇÃO PARA OBTER TODOS OS BOLOS DA TABELA
const getAllBolos = (req, res) => {
db.query('SELECT * FROM bolos', (err, results) => {

if(err) {
console.error('Erro ao obter Bolos:', err);
res.status(500).send('Erro ao obter Bolos');
return;
}
res.json(results);
})
}

module.exports = {
getAllBolos
};