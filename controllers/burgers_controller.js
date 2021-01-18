const mysql = require("mysql");
const config = require('../config/connection.js');
const connection = mysql.createConnection(config);



const express = require('express');
const burger = require('../models/burger.js');
const router = express.Router();
//const burger = require('../models/burger.js');
require('../models/burger.js');



router.get("/", function(req, res){
  burger.showAll(function(data){
      res.render("index", {bestBurger: data});
  });
});



//let burgerTRUE = [];
//first param for post is the location of these preceding actions
//START OF WORKING POST REQUEST
router.post("/new", (req, res, next) => {
    const data = req.body;
    res.json({
        status: "success",
        data: data,
        specificData: req.body.name
    });
    let burgerOne = req.body.name;
    connection.query(burger.addOne() + `('${burgerOne}')`, (err, res) => {
        if (err) throw err;   
    });
    
});
//END


router.put("/new/:id", function(req,res){
  const data = req.body;
    res.json({
        status: "success",
        data: data,
        specificData: req.body.name
    });
    //let burgerOne = req.params.id;
 connection.query( burger.changeOne({devoured: 0},{id: req.params.id}, function(result){
    if (result.affectedRows == 0) {
      return res.status(404).end();
    } else {
      res.status(200).end();
      
    }
  }));
});





module.exports = { router }