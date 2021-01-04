const Orm = require('../config/orm');

//  require('../config/orm');
// const db = {};


// require("dotenv").config();
// const fs = require("fs");
// const path = require("path");
// const basename = path.basename(__filename);
// const env = process.env.NODE_ENV || "production";
//const config = require(__dirname + "./config/config.js")[env];

//calling all Orm functions using burger specific inputs
const adding = new Orm();

adding.insertOne();



 // module.exports = add;