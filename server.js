const express = require('express');
const mongoose = require('mongoose');
const requireDir = require('require-dir');

// iniciando o App
const app = express();

// Iniciando o DB
mongoose.connect('mongodb://localhost:27017/nodeapi', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});
requireDir('./src/models');
const Product = mongoose.model('Product');

// Primeira rota
app.get('/', (req, res) => {
        Product.create({
            title: 'React Native',
            description: 'Build native apps with react',
            url: 'https://github.com/facebook/react-native'
        });
    
    return res.send('Hello world');
});

app.listen(3001);
