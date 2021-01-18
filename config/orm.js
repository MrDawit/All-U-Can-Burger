
const mysql = require('mysql');
const config = require("./connection");
const connection = mysql.createConnection(config);

//figure out the "?" variables and test the rest

class Orm {
  constructor(column, myForm_data) {
    this.column = column;
    this.myForm_data = myForm_data;
  };

  selectAll(cb) {
    connection.query('SELECT * FROM burgers_db.burgers', function (err, res) {
      if (err) throw err;
      cb(res);
    });
  };

  insertOne() {
    return 'INSERT INTO burgers_db.burgers (burger_name) VALUE ';
  };

  updateOne(col, value, cb) {
    connection.query("UPDATE burgers_db.burgers SET ? WHERE ? ", [col, value], (err, res) => {
      if (err) throw err;
      cb(res);
    });

  };

  removeOne(value, cb) {
    // DELETE FROM `burgers_db`.`burgers` WHERE (`id` = '14');
    connection.query("DELETE FROM burgers_db.burgers WHERE ? ", [value], (err, res) => {
      if (err) throw err;
      cb(res);
    });
  };

};


module.exports = Orm;