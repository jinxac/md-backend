const mysql = require('mysql2/promise');

const dbName = "medwing";

mysql.createConnection({
    host:      "127.0.0.1",
    port:      "3306",
    user     : "root",
    password : "admin",
}).then( connection => {
    connection.query(`CREATE DATABASE IF NOT EXISTS ${dbName};`).then((res) => {
        console.info("Database create or successfully checked");
        process.exit(0);
    })
})