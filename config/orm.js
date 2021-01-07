// const connection = require('../config/connection.js');

// require('dotenv').config();
//figure out the "?" variables and test the rest


class Orm {
  constructor(column, myForm_data) {

    this.column = column;
    this.myForm_data = myForm_data;
  };
  selectAll() {
   return 'SELECT burger_name FROM burgers_db.burgers';
    // connection.query('SELECT burger_name FROM burgers_db.burgers', (err, res) => {
    //   if (err) throw err;
    //   // let bgs = new Map(res);
    //   //       // return res[3].burger_name;
    //   //       //console.log(JSON.stringify(bgs.size));
    //   //console.log(res);
    //    const bgs = res;
    //   // const values = Array.prototype.map.call(bgs, function (obj) {
    //   //   return obj.value
    //   // });
    //   // console.log(values);
    //   return bgs;
    // });
  };
  insertOne() {
    //  return `INSERT INTO burgers_db.burgers (burger_name) VALUE ('${this.myForm_data}')`;
    return 'INSERT INTO burgers_db.burgers (burger_name) VALUE ';
    // });
  };
  // fix these
  updateOne() {

    connection.query(`UPDATE burgers_db.burgers SET 'burger_name' = '${mysql.escape(req.body.add)}' WHERE '${mysql.escape(req.body.add)}' = '${mysql.escape(req.body.add)}' `, (err, res) => {
      if (err) throw err;
      console.log(res);
    });

  };

};


module.exports = Orm;