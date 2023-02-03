const { Router } = require('express');

const UserController = require('../controllers/UserController');
const LoginController = require('../controllers/Login');
const ProductController = require('../controllers/ProductController');
const CartController = require('../controllers/CartController');

const { authenticate } = require('../middlewares');

const routes = Router();

routes.get("/", (req, res) => {
    res.send("Olá mundo!");
});

// rota para criar usuário
routes.post('/users', UserController.createUser);

// rota para listar usuários
routes.get('/users', UserController.getUsers);

// rota para listar usuário específico
routes.get('/users/:user_id', UserController.getUserById);

// rota para fazer login
routes.post('/login', LoginController.createSession);

// rota para criar produto
routes.post('/products/:user_id', authenticate, ProductController.createProduct);

// rota para listar os produtos de um usuário
routes.get('/:user_id/products', ProductController.getUserProducts);

// rota para atualizar o produto
routes.patch('/products/:user_id/:product_id', authenticate, ProductController.updateProduct);

// rota para deletar produtos
routes.delete('/products/:user_id/:product_id', authenticate, ProductController.deleteProduct);

// rota para listar todos os produtos
routes.get('/products', ProductController.getProducts);

// rota para buscar produto específico
routes.get('/products/:product_id', ProductController.getProductById);

// rota para listar carrinho
routes.post('/carts/:user_id', authenticate, CartController.createCart);

// todos os carts de um usuário
routes.get('/carts/:user_id', authenticate, CartController.getUserCarts);

// rota para listar carrinho específico
routes.get('/carts/:user_id/:card_id', authenticate, CartController.getCart);

module.exports = routes;