const express = require('express');
const router = express.Router();
// const burger = require('../models/burger.js');
// const router = express();
//router
// module.exports =  function(app){
//     // index route loads view/index.handlebars
//     app.get("/", function (req, res) {
//         res.render("index");
//     });

// };
 let burg=[];
 //first param for post is the location of these preceding actions
router.post("/", (req, res, next) =>{
   // burg = [];
burg.push(req.body.add);
res.render('index',{title: 'BURGER list', burg})

//ends the express method
res.end;
//next();
});



//IF wishing to switch to a different page than the post page
// router.use('/new', (req, res) => {
//     res.render('index',{title: 'BURGER list', burg})
//     console.log("Puta ");
//     res.end;
//   })


// console.log("PLEASE");



module.exports =  router;