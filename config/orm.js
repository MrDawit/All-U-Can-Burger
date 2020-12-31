const connection = require('../config/connection.js');
//figure out the "?" variables and test the rest
class Orm {
    constructor(dBase,column) {
        this.dBase = dBase;
        this.column = column;
    };
    selectAll() {
        
        connection.connect(function(err) {
            if (err) throw err;
            connection.query("SELECT * FROM '" + dBase + "'", function (err, res) {
              if (err) throw err;
              console.log(res);
            });
          });

    };
    insertOne() {
        connection.connect(function(err) {
            if (err) throw err;
            connection.query("SELECT '" + cloumn + "' FROM '" + dBase + "'", function (err, res) {
              if (err) throw err;
              console.log(res);
            });
          });
    };
    updateOne() {
        connection.connect(function(err) {
            if (err) throw err;
            connection.query("UPDATE '" + dBase + "' SET '" + column + "' = '" + "?" + "' WHERE '" + "??" + "' = '" + "???" + "' ", function (err, res) {
              if (err) throw err;
              console.log(res);
            });
          });
    };

};


module.exports = Orm;