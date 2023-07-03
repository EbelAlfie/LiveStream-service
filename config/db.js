const options = require('./knexfile').development
const knex = require('knex') (options);

module.exports = knex