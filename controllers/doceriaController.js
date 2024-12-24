const db = require('../config/db');//importa a conexão com o banco de dados

//FUNÇÃO PARA OBTER TODOS OS BOLOS DA TABELA
const getAllBolos = (req, res) => { //Define uma função arrows que recebe dois parâmetros, req (requisição) e res (resposta). 

db.query('SELECT * FROM bolos', (err, results) => { // Executa uma query SQL para selecionar todos dados na tabela. 

if(err) { //Verifica se houve um erro ao executar a query. Se houve, exibe uma  mensagem de erro no console e envia uma resposta de erro para o cliente. 

console.error('Erro ao obter Bolos:', err);

res.status(500).send('Erro ao obter Bolos'); // Se a query foi executada com sucesso, envia os resultados como uma resposta JSON para o cliente.

return;
}
res.json(results);  //xporta a função getAll para que possa ser utlizada em outros arquivos.
});
};


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
});
};


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




//CARRINHO*//
//*ADICIONAR PEDIDO AO CARRINHO*//
const addCarrinho = (req, res) => {
const {ID, nome_pedido, quantidade, preço} = req.body;
db.query(
  'INSERT INTO carrinho (ID, nome_pedido, quantidade, preço) VALUES(?, ?, ?, ?)',
  [ID, nome_pedido, quantidade, preço],
  (err, results) => {
  if (err) {
    console.error('Erro ao adicionar o pedido ao carrinho', err);
    res.status(500).send('Erro ao adicionar o pedido ao carrinho');
    return;
  }
  res.status(201).send('Pedido adicionado com sucesso');
  }
);
};


//HISTÓRICO DE PEDIDOS DO CARRINHO//
const getAllCarrinho = (req, res) => {
  db.query('SELECT * FROM carrinho', (err, results) => {
  if(err) {
  console.error('Erro ao obter o pedido:', err);
  res.status(500).send('Erro ao obter o pedido');
  return;
  }
  res.json(results);
  });
  };


//HISTÓRICO DAS FORMAS DE PAGAMENTO//
const getAllPagamento = (req, res) => {
  db.query('SELECT * FROM pagamento', (err, results) => {
  if(err) {
  console.error('Erro ao obter o pedido:', err);
  res.status(500).send('Erro ao obter o pedido');
  return;
  }
  res.json(results);
  });
  };


//ADICIONAR UMA FORMA DE PAGAMENTO//
const addPagamento = (req, res) => {
  const {ID, PIX, nome, email} = req.body;
  db.query(
    'INSERT INTO pagamento (ID, PIX, nome, email) VALUES(?, ?, ?, ?)',
    [ID, PIX, nome, email],
    (err, results) => {
    if (err) {
      console.error('Erro ao adicionar o pedido ao carrinho', err);
      res.status(500).send('Erro ao adicionar o pedido ao carrinho');
      return;
    }
    res.status(201).send('Pedido adicionado com sucesso');
    }
  );
  };


//histórico de donuts
  const getAllDonuts = (req, res) => {
    db.query('SELECT * FROM donuts', (err, results) => {
    if(err) {
    console.error('Erro ao obter os donuts:', err);
    res.status(500).send('Erro ao obter os donuts');
    return;
    }
    res.json(results);
    });
    };


    //histórico de cupcakes
    const getAllCupcakes = (req, res) => {
      db.query('SELECT * FROM donuts', (err, results) => {
      if(err) {
      console.error('Erro ao obter os donuts:', err);
      res.status(500).send('Erro ao obter os donuts');
      return;
      }
      res.json(results);
      });
      };


module.exports = {
//GET ALL
getAllBolos,
getAllPedidos,
getAllDonuts,
getAllCupcakes,
getAllPagamento,
getAllCarrinho,

//POST
addPedidos,
addPagamento,
addCarrinho,

//PUT
updatePedidosPut,

//DELETE
deletePedidos
};