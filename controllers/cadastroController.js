const db = require('../config/db'); //importa a conexão com o banco de dados

//função para obter todos os pedidos
const getAllCadastro= (req, res) => {
    db.query('SELECT * FROM cadastro', (err, results) => {

        if (err) {
            console.error('Erro ao obter os sabores')
            res.status(500).send('Erro ao obter os sabores');
            return;
        }
        res.json(results);
    });
};

module.exports = {
getAllCadastro
};