
//const mysql = require('mysql');
// const config = require("./connection");
// const connection = mysql.createConnection(config);

const connection= require("./connection");

//figure out the "?" variables and test the rest
//keep connection for ALL queries or NONE on this page. be consistent(to be done later)
class Orm {
  constructor(column, myForm_data) {
    this.column = column;
    this.myForm_data = myForm_data;
  };

  selectAll(cb) {
    
    // connection.query('SELECT * FROM burgers_db.burgers', function (err, res) {
      connection.query('SELECT * FROM burgers', function (err, res) {
      if (err) throw err;
      cb(res);
    });
  };

  insertOne() {
    // return 'INSERT INTO burgers_db.burgers (burger_name) VALUE ';
    return 'INSERT INTO burgers (burger_name) VALUE ';
  };

  updateOne(col, value, cb) {
    // connection.query("UPDATE burgers_db.burgers SET ? WHERE ? ", [col, value], (err, res) => {
      connection.query("UPDATE burgers SET ? WHERE ? ", [col, value], (err, res) => {
      if (err) throw err;
      cb(res);
    });

  };

  removeOne(value, cb) {
    //example: DELETE FROM `burgers_db`.`burgers` WHERE (`id` = '14');
    // connection.query("DELETE FROM burgers_db.burgers WHERE ? ", [value], (err, res) => {
      connection.query("DELETE FROM burgers WHERE ? ", [value], (err, res) => {
      if (err) throw err;
      cb(res);
    });
  };

};


module.exports = Orm;