// app.js

var express = require('express');
var bodyParser = require('body-parser');

var product = require('./routes/product'); // Importa rota
var app = express();


// Ativando conexão com o banco     // ja deixei criado \/              ja deixei criado \/  
var mongoose = require('mongoose');// \/ User e Senha                  //Nome do banco \/
var dev_db_url = 'mongodb+srv://bd_user:1234@cluster0-7vejj.gcp.mongodb.net/productstutorial'; // esse banco está no site mongodb.atlas
var mongoDB = process.env.MONGODB_URI || dev_db_url;
mongoose.connect(mongoDB);
mongoose.Promise = global.Promise;
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB Deu pau carai, aqui o motivo da sua burrice:'));

//BodyParser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use('/products', product);

//Definindo a porta de acesso
var port = 1234;
app.listen(port, () => {
    console.log('A budega ta rodando nessa porta: ' + port);
});
