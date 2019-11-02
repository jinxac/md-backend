const mysql = require('mysql2/promise');
const env = process.env.ENVIRONMENT || 'development';
const config = require('../config/config')[env];

const dbName = config.database;

mysql.createConnection({
  host: config.host,
  port: config.port,
  user: config.username,
  password: config.password,
}).then((connection) => {
  connection.query(`CREATE DATABASE IF NOT EXISTS ${dbName};`).then(() => {
    process.exit(0);
  });
});
