const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const requireDir = require('require-dir');

//Iniciando o app
const app = express();
app.use(express.json());
app.use(cors());//Para ser acessada publicamente

//Conexão com o banco de dados
mongoose.connect('mongodb://localhost:27017/nodeapi',
{useNewUrlParser:true, 
useUnifiedTopology:true});

// require('./src/models/Product');//Importando model Product   
requireDir('./src/models');//Biblioteca para carregar todos os models

//Rotas
app.use('/api',require('./src/routes'));

app.listen(3001);