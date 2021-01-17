const mysql = require("mysql");
const config = require('../config/connection.js');
const connection = mysql.createConnection(config);



const express = require('express');
const burger = require('../models/burger.js');
const router = express.Router();
//const burger = require('../models/burger.js');
require('../models/burger.js');


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

router.get("/", function(req, res){
  burger.showAll(function(data){
      res.render("index", {bestBurger: data});
  });
});


// router.get("/", function(req, res){
//   burger.selectAll(function(data){
//       var burgerObj = {
//           burgers: data
//       };
//       res.render("index", burgerObj);
//   });
// });
      // connection.query(burger.showAll(), (err,data) => {
      //      if (err) throw err;
      //       //IMPORTANT CONSOLE

      //       //console.log(res);
           
      //      // const burgerTRUE = res[2].burger_name;
      //     // const burgerTRUE = data;
      //       //works for 1 result
      //      //const conSole =console.log(burgerTRUE[2].burger_name);
      //     // const conSole =console.log(burgerTRUE);
      //     // burgerTRUE = {
      //     //   burger: data
      //     // };
      
      // WORKS IN SIMPLE EXTRACTION OF DATA
      // router.get("/", function (req, res) {
      //   burger.showAll(function(burg){
      //     res.render("index",{ cheese : burg });
      //   }); 
      //     console.log(res.body);
      //   });
      //END

    //   router.get("/", function(req, res) {
    //     console.log("Route Path Hit");
    //     burger.showAll((data) => {
    //       handlebarsObject = {
    //         burger: data
    //       };
    //       console.log("Diplayed Burgers");
    //       res.render("index", handlebarsObject);
    //     });
    
    // });

      
            // return {burgerTRUE};
            //console.log(burger.showAll(data));
           // return burger.showAll(data)
            // console.log(burgerOne);
            // res.send
            //  res.render('index', {burgerTRUE})
   
    


//mainFunc.first();
//IMPORTANT CONSOLE
//console.log("PLEASE CODING GODS");

//     res.render('index',{title: 'BURGER list', burg})

//console.log("THIS: " + burgerTRUE);


module.exports = { router }