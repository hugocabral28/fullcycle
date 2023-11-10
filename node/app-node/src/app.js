const express = require('express');

const app = express();

//Rotas
const index = require('./routes/homeRoute');


// configuracao do express
app.use(
    express.urlencoded({
        extended: true
    })
);

app.use(express.json());

// View engine setup
app.set('view engine', 'ejs');
app.set('views', './views');

app.use('/', index);

module.exports = app;