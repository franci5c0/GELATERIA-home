const db = require('../config/db'); //importa a conexão com o banco de dados


//SABORES//

//função para obter todos os sabores
const getAllSabores = (req, res) => {
  db.query('SELECT * FROM sabores', (err, results) => {

      if (err) {
          console.error('Erro ao obter os sabores')
          res.status(500).send('Erro ao obter os sabores');
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
    


    //CADASTRO//















    module.exports = {
        getAllSabores,
        getAllPedidos,
        addPedidos,
        addCarrinho,
        getAllCarrinho,
        deletePedidos,
        deleteCarrinho
        
        };





