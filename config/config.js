const dotenv = require('dotenv').config();

module.exports = {
  "development": {
    "username": process.env.DB_USERNAME || "root",
    "password": process.env.DB_PASSWORD || "admin",
    "database": process.env.DB_NAME || "medwing",
    "host": process.env.DB_HOST || "127.0.0.1",
    "dialect": "mysql",
    "operatorsAliases": false
  },
  "test": {
    "username": process.env.DB_USERNAME || "root",
    "password": process.env.DB_PASSWORD || "admin",
    "database": process.env.DB_NAME || "medwing",
    "host": process.env.DB_HOST || "127.0.0.1",
    "dialect": "mysql",
    "operatorsAliases": false
  }
}
