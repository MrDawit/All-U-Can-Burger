const express = require('express');
const router = express.Router();
const burger = require('../models/burger.js');
// const router = express();
//router
// module.exports =  function(app){
//     // index route loads view/index.handlebars
//     app.get("/", function (req, res) {
//         res.render("index");
//     });
//IMPORTANT : router.post is not activated when add.js uses form data
// };
//  let burg=[];



//  FIND OUT WHY THIS POST REQUEST IS USED EVERYTIME THE SERVER SEES THIS FILE!
//(MYSQL ADDS A ROW EVERYTIME I START OR RESTART APP!)


//first param for post is the location of these preceding actions
router.post("/api", (req, res, next) =>{
    // let burg=[];
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
console.log("burgers_controller: " + req);
//router using db objects instead of direct form data


//res.render("index",{burger});


//res.end;
//console.log(burger);

//console.log(res[3].burger_name);



});

console.log("PLEASE CODING GODS");

//IF wishing to switch to a different page than the post page
// router.use('/new', (req, res) => {
//     res.render('index',{title: 'BURGER list', burg})
//     console.log("Puta ");
//     res.end;
//   })


// console.log("PLEASE");



module.exports =  router;