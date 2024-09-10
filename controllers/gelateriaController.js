
const db = require('../config/db'); //importa a conexão com o banco de dados


//CADASTRO//

// Função para adicionar um novo cadastro
const addCadastro = (req, res) => { 
    const { id, cliente, sobrenome, Email, CPF, endereço} = req.body; 
    db.query( 
      'INSERT INTO cadastro (id, cliente, sobrenome, Email, CPF, endereço) VALUES (?, ?, ?, ?, ?, ?)', 
      [id, cliente, sobrenome, Email, CPF, endereço], 
      (err, results) => { 
        if (err) { 
          console.error('Erro ao cadastrar:', err); 
          res.status(500).send('Erro ao cadastrar'); 
          return; 
        } 
        res.status(201).send('Cadastro adicionado com sucesso'); 
      } 
    ); 
  }; 


//função para obter todos os cadastros
const getAllCadastro = (req, res) => {
    db.query('SELECT * FROM cadastro', (err, results) => {
  
        if (err) {
            console.error('Erro ao obter o histórico de cadastros')
            res.status(500).send('Erro ao obter o histórico de cadastros');
            return;
        }
        res.json(results);
    });
  };


  //função para deletar um cadastro
 const deleteCadastro = (req, res) => {  
    const { id } = req.params;
    db.query('DELETE FROM cadastro WHERE id = ?', [id], (err, results) => {

        if(err) {
            console.error('Erro ao deletar o cadastro', err);
            res.status(500).send('Erro ao deletar o cadastro');
            return;
        }
        res.send('Cadastro deletado com sucesso')
    });
};


//SABORES//

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

  

//--PEDIDOS--//

//função para obter todos os pedidos
const getAllPedidos = (req, res) => {
    db.query('SELECT * FROM pedidos', (err, results) => {

        if (err) {
            console.error('Erro ao obter os pedidos')
            res.status(500).send('Erro ao obter os pedidos');
            return;
        }
        res.json(results);
    });
};

// Função para adicionar um novo pedido ao histórico
const addPedidos = (req, res) => { 
    const { id, sabor, quantidade, preço} = req.body; 
    db.query( 
      'INSERT INTO Pedidos (id, sabor, quantidade, preço) VALUES (?, ?, ?, ?)', 
      [id, sabor, quantidade, preço], 
      (err, results) => { 
        if (err) { 
          console.error('Erro ao adicionar pedido:', err); 
          res.status(500).send('Erro ao adicionar pedido'); 
          return; 
        } 
        res.status(201).send('Pedido adicionado com sucessos'); 
      } 
    ); 
  }; 


 //função para deletar um pedido
 const deletePedidos = (req, res) => {  
    const { id } = req.params;
    db.query('DELETE FROM pedidos WHERE id = ?', [id], (err, results) => {

        if(err) {
            console.error('Erro ao deletar Pedido', err);
            res.status(500).send('Erro ao deletar pedido');
            return;
        }
        res.send('Pedido deletado com sucesso')
    });
};


//--CARRINHO--//

//função para obter todos os pedidos
const getAllCarrinho = (req, res) => {
    db.query('SELECT * FROM carrinho', (err, results) => {

        if (err) {
            console.error('Erro ao obter os pedidos')
            res.status(500).send('Erro ao obter os pedidos');
            return;
        }
        res.json(results);
    });
};


// Função para adicionar um novo pedido
const addCarrinho = (req, res) => { 
    const { id, sabor, quantidade, preço} = req.body; 
    db.query( 
      'INSERT INTO carrinho (id, sabor, quantidade, preço) VALUES (?, ?, ?, ?)', 
      [id, sabor, preço, quantidade], 
      (err, results) => { 
        if (err) { 
          console.error('Erro ao adicionar pedido:', err); 
          res.status(500).send('Erro ao adicionar pedido'); 
          return; 
        } 
        res.status(201).send('Pedido adicionado com sucessos'); 
      } 
    ); 
  }; 



    //função para deletar um pedido
    const deleteCarrinho = (req, res) => {  
        const { id } = req.params;
        db.query('DELETE FROM carrinho WHERE id = ?', [id], (err, results) => {
    
            if(err) {
                console.error('Erro ao deletar Pedido', err);
                res.status(500).send('Erro ao deletar pedido');
                return;
            }
            res.send('Pedido deletado com sucesso')
        });
    };
    
    //PAGAMENTO//

    //função para obter todos os pedidos
const getAllPagamento = (req, res) => {
  db.query('SELECT * FROM pagamento', (err, results) => {

      if (err) {
          console.error('Erro ao obter as formas de pagamento')
          res.status(500).send('Erro ao obter as formas de pagamento');
          return;
      }
      res.json(results);
  });
};


// Função para adicionar um novo pedido
const addPagamento = (req, res) => { 
  const { id, PIX} = req.body; 
  db.query( 
    'INSERT INTO pagamento (id, PIX) VALUES (?, ?)', 
    [id, PIX], 
    (err, results) => { 
      if (err) { 
        console.error('Erro ao adicionar forma de pagamento:', err); 
        res.status(500).send('Erro ao adicionar Forma de pagamento'); 
        return; 
      } 
      res.status(201).send('Forma de pagamento adicionada com sucessos'); 
    } 
  ); 
}; 



  //função para deletar um pedido
  const deletePagamento = (req, res) => {  
      const { id } = req.params;
      db.query('DELETE FROM pagamento WHERE id = ?', [id], (err, results) => {
  
          if(err) {
              console.error('Erro ao deletar a forma de pagamento', err);
              res.status(500).send('Erro ao deletar a forma de pagamento');
              return;
          }
          res.send('Forma de pagamento deletada com sucesso')
      });
  };
  


    module.exports = {
        addCadastro,
        getAllCadastro,
        getAllSabores,
        getAllPedidos,
        addPedidos,
        addCarrinho,
        getAllCarrinho,
        addPagamento,
        getAllPagamento,
        deletePagamento,
        deletePedidos,
        deleteCarrinho,
        deleteCadastro
        };






