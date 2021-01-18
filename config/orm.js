// const connection = require('../config/connection.js');
const mysql= require('mysql');
const config = require("./connection");
const connection = mysql.createConnection(config);
// require('dotenv').config();
//figure out the "?" variables and test the rest


class Orm {
  constructor(column, myForm_data) {

    this.column = column;
    this.myForm_data = myForm_data;
  };

selectAll(cb) {
  //Correct
  connection.query('SELECT * FROM burgers_db.burgers', function(err,res){
    if (err) throw err;
cb(res);
  })

  };
  insertOne() {
   
    return 'INSERT INTO burgers_db.burgers (burger_name) VALUE ';
    // });
  };
  // fix 
  updateOne(col,value,cb) {

    connection.query("UPDATE burgers_db.burgers SET ? WHERE ? ",[col,value], (err, res) => {
      if (err) throw err;
      cb(res);
    });

  };

};


module.exports = Orm;