const knex = require('knex');
const knexConf = require('../../knexfile');

const connection = knex(knexConf.development);

module.exports = connection;
