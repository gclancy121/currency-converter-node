const express = require('express');
const Currency = require('./currencyModel');

const router = express.Router();

router.get('/', (req, res, next) => {
    Currency.fetchConversions().then(result => {
        res.status(200).json(result);
    }).catch(err => next(err));
})

module.exports = router;