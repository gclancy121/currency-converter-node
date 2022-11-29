//Servers
const express = require('express');
const helmet = require('helmet');
const cors = require('cors');

//Routers
const currencyRouter = require('./currency/currencyRouter');

//Server setup
const server = express();
server.use(cors());
server.use(helmet());
server.use(express.json());

//Server router use
server.use('/conversions', currencyRouter);

server.use((err, req, res, next) => {
    res.status(err.status || 500).json({message: err.message, stack: err.stack});
});

module.exports = server;