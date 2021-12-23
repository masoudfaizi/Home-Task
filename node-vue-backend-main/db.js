const Pool = require('pg').Pool;


const pool = new Pool({
    user: 'test',
    password : 'TestUser',
    database : 'homeworks',
    host : 'localhost',
    schema: 'co2_emission_analytics',
    port : 5432
});

module.exports = pool;