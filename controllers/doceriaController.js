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


//PEDIDOS//

//FUNÇÃO PARA PARA OBTER TODOS OS PEDIDOS
const getAllPedidos = (req, res) => {
db.query('SELECT * FROM pedidos', (err, results) => {
if(err) {
console.error('Erro ao obter bolos:', err);
res.status(500).send('Erro ao obter bolos');
return;
}
res.json(results);
})
}


//FUNÇÃO PARA ADICIONAR UM BOLO AOS PEDIDOS
const addPedidos = (req, res) => {
const {ID, nome_bolo, quantidade} = req.body;
db.query(
   'INSERT INTO pedidos (ID, nome_bolo, quantidade) VALUES(?, ?, ?)',
   [ID, nome_bolo, quantidade],
   (err, results) => {
    if (err) {
    console.error('Erro ao adicionar o bolo', err);
    res.status(500).send('Erro ao adicionar o bolo');
    return;
    }
res.status(201).send('Bolo adicionado com sucesso');
  }
 );
};


//FUNÇÃO PARA ATUALIZAR UM PEDIDO EXISTENTE (COMPLETO)
const updatePedidosPut = (req, res) => { 
  const { id } = req.params; 
  const {nome_bolo, quantidade} = req.body; 
  db.query( 
    'UPDATE pedidos SET nome_bolo = ?, quantidade = ?  WHERE id = ?', 
    [nome_bolo, quantidade, id], 
    (err, results) => { 
      if (err) { 
        console.error('Erro ao atualizar o pedido:', err); 
        res.status(500).send('Erro ao atualizar o pedido'); 
        return; 
      } 
      res.send('Pedido atualizado com sucesso'); 
    } 
  ); 
}; 


//FUNÇÃO PARA DELETAR UM PEDIDO EXISTENTE
const deletePedidos = (req, res) => { 
  const { id } = req.params; 
  db.query('DELETE FROM pedidos WHERE id = ?', [id], (err, results) => { 
    if (err) { 
      console.error('Erro ao deletar o pedido:', err); 
      res.status(500).send('Erro ao deletar o pedido'); 
      return; 
    } 
    res.send('Pedido deletado com sucesso'); 
  }); 
}; 


module.exports = {
getAllBolos,
getAllPedidos,
addPedidos,
updatePedidosPut,
deletePedidos
};