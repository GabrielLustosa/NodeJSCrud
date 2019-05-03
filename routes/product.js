var express = require('express');
var router = express.Router();


var product_controller = require('../controllers/product');

// rota de tudo, se tu quiser acessar bota  esses link ae:

// http://localhost:1234/products/test
router.get('/test', product_controller.test);

//http://localhost:1234/products/create   Testado pelo software POSTMAN, VIA POST colocando por exemplo name: apple / price: 15
router.post('/create', product_controller.product_create);

//http://localhost:1234/products/{id}   Testado pelo software POSTMAN, VIA GET colocando por exemplo no lugar do {id} --> o id do produto EX: 5ccc366c20f31421a809115c
router.get('/:id', product_controller.product_details);

//http://localhost:1234/products/{id}/update   Testado pelo software POSTMAN, VIA PUT colocando por exemplo no lugar do {id} --> o id do produto EX: 5ccc366c20f31421a809115c
router.put('/:id/update', product_controller.product_update);

//http://localhost:1234/products/{id}/delete   Testado pelo software POSTMAN, VIA DELETE colocando por exemplo no lugar do {id} --> o id do produto EX: 5ccc366c20f31421a809115c
router.delete('/:id/delete', product_controller.product_delete);


const path = require('path');

//manda redirect pro index.html se o link estiver na raiz... no caso localhost:1234/products
router.get('/', function (req, res) {
    res.sendFile(path.join(__dirname + '/../index.html'));
    //__dirname : It will resolve to your project folder.
});



module.exports = router;


