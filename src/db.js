const mysql = require("mysql");

const db = mysql.createConnection({
    host: "database-1.c3koiuuggbgx.ap-northeast-2.rds.amazonaws.com",
    user: "admin",
    password: "hsj99714246",
    database: "login",
});

db.connect();


module.exports = db;



