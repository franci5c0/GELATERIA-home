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
const addCarrinho_bolos = (req, res) => {
const {ID, nome_bolo, quantidade, preço} = req.body;
db.query(
  'INSERT INTO carrinho_bolos (ID, nome_bolo, quantidade, preço) VALUES(?, ?, ?, ?)',
  [ID, nome_bolo, quantidade, preço],
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
const getAllCarrinho_bolos = (req, res) => {
  db.query('SELECT * FROM carrinho_bolos', (err, results) => {
  if(err) {
  console.error('Erro ao obter o pedido:', err);
  res.status(500).send('Erro ao obter o pedido');
  return;
  }
  res.json(results);
  });
  };


//FUNÇÃO PARA DELETAR UM PEDIDO DO CARRINHO
const deleteCarrinho_bolos = (req, res) => { 
  const { id } = req.params; 
  db.query('DELETE FROM carrinho_bolos WHERE id = ?', [id], (err, results) => { 
    if (err) { 
      console.error('Erro ao deletar o pedido:', err); 
      res.status(500).send('Erro ao deletar o pedido'); 
      return; 
    } 
    res.send('Pedido deletado com sucesso'); 
  }); 
}; 


//PAGAMENTO//

//HISTÓRICO DE FORMAS DE PAGAMENTO//
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



//CADASTRO//
const addCadastro = (req,res) => {
  const {nome, email, CPF, senha} = req.body;

db.query (
  'SELECT * FROM cadastro WHERE email = ? AND CPF = ?',

  [nome, email, CPF, senha], 
  (err,result) => {
    if(err) {
        console.error('Erro ao verificar o cliente', err);
        res.status(500).send('Erro ao verificar o cliente');
        return;
      }
      if(result.length > 0) {
        res.status(400).send('Cliente já cadastrado');
        return;
      }
      db.query (
        'INSERT INTO cadastro (nome, email, CPF, senha) VALUES(?, ?, ?, ?)',
        [nome, email, CPF, senha],
        (err,result) => {

          if (err) {
            console.error('Cliente já cadastrado', err);
            res.status(500).send('Cliente já cadastrado');
            return;
          }
          res.status(201).send('Cliente cadastrado com sucesso');
        }
      );
    }
  );
};

const getAllCadastro = (req, res) => {
  db.query('SELECT * FROM cadastro', (err, results) => {
  if(err) {
  console.error('Erro ao obter os cadastros:', err);
  res.status(500).send('Erro ao obter os cadastros');
  return;
  }
  res.json(results);
  });
  };



const deleteCadastro = (req, res) => { 
  const { id } = req.params; 
  db.query('DELETE FROM cadastro WHERE id = ?', [id], (err, results) => { 
    if (err) { 
      console.error('Erro ao deletar o cadastro:', err); 
      res.status(500).send('Erro ao deletar o cadastro'); 
      return; 
    } 
    res.send('Cadastro deletado com sucesso'); 
  }); 
}; 







module.exports = {
getAllBolos,
getAllPedidos,
getAllCarrinho_bolos,
getAllPagamento,
getAllCadastro,
addPedidos,
addCarrinho_bolos,
addCadastro,
addPagamento,
updatePedidosPut,
deletePedidos,
deleteCarrinho_bolos,
deleteCadastro
};