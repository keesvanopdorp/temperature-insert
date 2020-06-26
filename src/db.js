const Knex = require('knex');
const knexConfig = require('./knexfile');
const connectionConfig = knexConfig['development'];
module.exports = Knex(connectionConfig);