 require("dotenv").config();
const mysql = require("mysql");

//when connection is NOT in an if condition, process of elimination shows it needs to be declared a const variable
//when using dotenv
 if (process.env.JAWSDB_URL) {
  connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
  connection = mysql.createConnection({
    host: process.env.HOST,
    port: process.env.PORTER,
    user: process.env.USER,
    password: process.env.PASSWORD,
    database: process.env.DATABASE
  });

};

//test for heroku's jawsdb fix
connection.connect();


module.exports = connection;