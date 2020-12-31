const mysql = require("mysql");

module.exports.connection = mysql.createConnection({
  host: process.env.HOST,
  port: process.env.PORTER,
  user: process.env.USER,
  password: process.env.PASSWORD,
  database: process.env.DATABASE
});




