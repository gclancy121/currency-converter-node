const db = require('../../data/dbConfig');

function fetchConversions() {
    return db('conversions');
}


module.exports = {
    fetchConversions,
}