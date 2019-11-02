const mysql = require('mysql2/promise');

const dbName = process.env.DB_NAME || 'medwing';

mysql.createConnection({
  host: process.env.DB_HOST || '127.0.0.1',
  port: process.env.DB_PORT || '3306',
  user: process.env.DB_USERNAME  || 'root',
  password: process.env.DB_PASSWORD || 'admin',
}).then((connection) => {
  connection.query(`CREATE DATABASE IF NOT EXISTS ${dbName};`).then(() => {
    process.exit(0);
  });
});
