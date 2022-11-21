//Servers
const express = require('express');
const helmet = require('helmet');
const cors = require('cors');

//Routers
//empty as of right now

//Server setup
const server = express();
server.use(cors());
server.use(helmet());
server.use(express.json());

//Server router use
//empty as of right now

server.use((err, req, res, next) => {
    res.status(err.status || 500).json({message: err.message, stack: err.stack});
});

module.exports = server;