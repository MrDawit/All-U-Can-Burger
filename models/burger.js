const Orm = require('../config/orm');
//adding comment for deployment fixs
//calling all Orm functions using burger specific inputs
var burger = {
    showAll: (cb) => {
        const adding = new Orm();
        return adding.selectAll(function (res) {
            cb(res);
        });

    },
    addOne: () => {
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