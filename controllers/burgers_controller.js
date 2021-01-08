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
router.post("/new", (req, res, next) => {

    //empty var (as obvious) will cause array to start off empty
    // burg = [];


    // burg.push(req.body.add);
    // res.render("index",{burg});
    // console.log(burg);
    // // console.log(req.body);
    // // req.body=[];
    //  console.log(req.body.add);
    // //ends the express method
    // res.end;
    // //next();
    // myForm_data = req.body.add;

    //IMPORTANT CONSOLE
    //console.log("burgers_controller: " + req.body.name);
    //router using db objects instead of direct form data

    //burger.showAll();
    //burger.addOne(0,'facts');

    const data = req.body;
    res.json({
        status: "success",
        data: data,
        specificData: req.body.name
    });



    let burgerOne = req.body.name;
    connection.query(burger.addOne() + `('${burgerOne}')`, (err, res) => {
        if (err) throw err;
        
        // console.log(res);
        //  console.log(burgerOne);
        // res.send
        // res.render()
    });


    //let burgerTRUE = [];

    // const mainFunc = {
    //     first: function () {
    //         return connection.query(burger.showAll(), (err, res) => {
    //             if (err) throw err;
    //             //IMPORTANT CONSOLE

    //             //console.log(res);
    //             // const conSole =console.log(res);
    //             const burgerTRUE = res;
    //             return burgerTRUE;
    //             // console.log(burgerOne);
    //             // res.send
    //             //  res.render('index', {burger})
    //         })
    //     },
    // };




    //console.log(burgerTRUE);
    // console.log(res[3].burger_name);


});


const mainFunc = {
    first: function () {
        return connection.query(burger.showAll(), (err, res) => {
            if (err) throw err;
            //IMPORTANT CONSOLE

            //console.log(res);
             
            const burgerTRUE = res;
            const conSole =console.log(burgerTRUE);
            return {burgerTRUE, conSole};
            // console.log(burgerOne);
            // res.send
            //  res.render('index', {burger})
        })
    },
};

mainFunc.first();
//IMPORTANT CONSOLE
//console.log("PLEASE CODING GODS");

//     res.render('index',{title: 'BURGER list', burg})

//console.log("THIS: " + burgerTRUE);


module.exports = { router, mainFunc }