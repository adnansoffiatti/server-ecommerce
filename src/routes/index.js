const { Router } = require('express');
const routes = Router();

routes.get("/", (req, res) => {
    res.send("Olá mundinho lindo!");
});

// rota para criar usuário
routes.post('/users');

// rota para listar usuários
routes.get('/users');

// rota para listar usuário específico
routes.get('/users/:user_id');

// rota para fazer login
routes.post('/login');

// rota para criar produto
routes.post('/products/:user_id');

// rota para listar os produtos de um usuário
routes.get('/products/:user_id');

// rota para atualizar o produto
routes.patch('/products/:user_id/:product_id');

// rota para deletar produtos
routes.delete('/products/:user_id/product_id');

// rota para listar todos os produtos
routes.get('/products');

// rota para buscar produto específico
routes.get('/products/:product_id');

// rota para listar carrinho
routes.post('/cart/:user_id');

// todos os carts de um usuário
routes.get('/cart/:user_id');

// rota para listar carrinho específico
routes.get('/cart/:user_id/:card_id');

module.exports = routes;