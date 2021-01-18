const Orm = require('../config/orm');
// const router = require('../controllers/burgers_controller');
require("dotenv").config();
require('../config/orm');





//calling all Orm functions using burger specific inputs
//const adding = new Orm();

var burger = {
    showAll: (cb) => {
        const adding = new Orm();
        return adding.selectAll(function (res) {
            cb(res);
        });

    },
    addOne: () => {
        //var burgerOne = await[`'${req.body.name}'`];
        //const adding = await new Orm('#', burgerOne);
        //return console.log(burgerOne);
        const adding = new Orm();
        return adding.insertOne();
    },
    changeOne: (col, value, cb) => {
        const adding = new Orm();
        return adding.updateOne(col, value, function (res) {
            cb(res);
        });
    },
    deleteOne: (value, cb) => {
        const adding = new Orm();
        return adding.removeOne(value, function (res) {
            cb(res);
        });
    },
};

module.exports = burger;