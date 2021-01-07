const Orm = require('../config/orm');
// const router = require('../controllers/burgers_controller');
require("dotenv").config();
require('../config/orm');





//calling all Orm functions using burger specific inputs
//const adding = new Orm();

var burger = {
    showAll: () => {
        const adding = new Orm();
       return adding.selectAll();
      
    },
    addOne: () => {
        //var burgerOne = await[`'${req.body.name}'`];
        //const adding = await new Orm('#', burgerOne);
        //return console.log(burgerOne);
        const adding = new Orm();
        return adding.insertOne();
    }
};

module.exports = burger;