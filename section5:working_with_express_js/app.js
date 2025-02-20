const express = require('express');

const app = express();

app.use('/add-product', (req, res, next) => {
    console.log('In the middleware');
    res.send('<h1>Handling route "Add Product" Page </h1>');
})

app.use('/', (req, res, next) => {
    console.log('In another middleware');
    res.send('<h1>Testing function bawaan dari express js</h1>');
})

// const server = http.createServer();
app.listen(3000);
// server.listen(3000);