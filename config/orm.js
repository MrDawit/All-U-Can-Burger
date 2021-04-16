
const connection= require("./connection");

//keep connection for ALL queries or NONE on this page. be consistent(to be done later)
class Orm {
  constructor(column, myForm_data) {
    this.column = column;
    this.myForm_data = myForm_data;
  };

  selectAll(cb) {
      connection.query('SELECT * FROM burgers', function (err, res) {
      if (err) throw err;
      cb(res);
    });
  };

  insertOne() {
    return 'INSERT INTO burgers (burger_name) VALUE ';
  };

  updateOne(col, value, cb) {
      connection.query("UPDATE burgers SET ? WHERE ? ", [col, value], (err, res) => {
      if (err) throw err;
      cb(res);
    });

  };

  removeOne(value, cb) {
      connection.query("DELETE FROM burgers WHERE ? ", [value], (err, res) => {
      if (err) throw err;
      cb(res);
    });
  };

};


module.exports = Orm;