// para la bd
const { Pool } = require("pg");

const pool = new Pool({
  host: "localhost",
  user: "postgres",
  password: "sql7777",
  database: "softjobs",
  allowExitOnIdle: true,
});

module.exports = pool;
