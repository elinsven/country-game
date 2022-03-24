const Pool = require("pg").Pool;

const pool = new Pool({
    user: "postgres",
    password: "3431",
    database: "countries",
    host: "localhost",
    port: 5432
});

module.exports = pool;