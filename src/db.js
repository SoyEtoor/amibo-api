const { Pool } = require('pg');

const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'mi_api',
  password: '040901',
  port: 5432,
});

module.exports = pool;
