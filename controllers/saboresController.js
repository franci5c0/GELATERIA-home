const db = require('../config/db'); //importa a conexão com o banco de dados



//função para obter todos os pedidos
const getAllSabores = (req, res) => {
    db.query('SELECT * FROM sabores', (err, results) => {

        if (err) {
            console.error('Erro ao obter os pedidos')
            res.status(500).send('Erro ao obter os pedidos');
            return;
        }
        res.json(results);
    });
};


module.exports = {
    getAllSabores,
    };