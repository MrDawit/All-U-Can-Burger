// const connection = require('../config/connection.js');
const mysql = require("mysql");
const config = require('../config/connection.js');
const connection = mysql.createConnection(config);
// require('dotenv').config();
//figure out the "?" variables and test the rest


class Orm {
    constructor(dBase,column,myForm_data) {
        this.dBase = dBase;
        this.column = column;
        this.myForm_data = myForm_data;
    };
    selectAll() {
             connection.query('SELECT * FROM burgers_db.burgers', (err, res)  => {
              if (err) throw err;

              // return res[3].burger_name;
              console.log(res[3].burger_name);
            });
    };
    insertOne() {
        // connection.connect(function(err) {
        //     if (err) throw err;
            // connection.query(`INSERT INTO burgers_db.burgers (burger_name) VALUES '${req.body.add}'`, function (err, res) {
              connection.query(`INSERT INTO burgers_db.burgers (burger_name) VALUE ('${this.myForm_data}')`, function (err, res) {
              if (err) throw err;
              console.log(res);
            });
          // });
    };
    // fix these
    updateOne() {
        connection.connect(function(err) {
            if (err) throw err;
            connection.query(`UPDATE '${dBase}' SET '${column}' = '${mysql.escape(req.body.add)}' WHERE '${mysql.escape(req.body.add)}' = '${mysql.escape(req.body.add)}' `, function (err, res) {
              if (err) throw err;
              console.log(res);
            });
          });
    };

};


// module.exports = Orm;