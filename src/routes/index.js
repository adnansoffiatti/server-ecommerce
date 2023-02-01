const { Router } = require('express');
const routes = Router();

routes.get("/", (req, res) => {
    res.send("Olá mundinho lindo!");
});

module.exports = routes;