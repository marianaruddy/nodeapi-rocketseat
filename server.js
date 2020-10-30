const express = require('express');
const mongoose = require('mongoose');

// iniciando o App
const app = express();

// Iniciando o DB
mongoose.connect('mongodb://localhost:27017/nodeapi', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

// Primeira rota
app.get('/', (req, res) => {
    return res.send('Hello world');
});

app.listen(3001);
