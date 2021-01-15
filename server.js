// const mysql = require("mysql");
// const config = require('./config/connection.js');
// const connection = mysql.createConnection(config);



const express = require('express');
 const app = express();
//  const path = require('path');
const burgerRouter = require("./controllers/burgers_controller");
// const {mainFunc} = require("./controllers/burgers_controller");
var PORT = process.env.PORT || 3030;
// var db = require("./models");
var exphbs = require("express-handlebars");
// const burger = require('./models/burger');

 app.engine("handlebars", exphbs({defaultLayout: "main" }));
// app.engine("handlebars", exphbs({ defaultLayout: "main" , layoutsDir: __dirname + "/views/layouts"}));
//  app.set('views', path.join(__dirname,'/views'));
app.set("view engine", "handlebars");

//  Router.router();

// app.use()

 
// require('./routes/html-routes')(app);

//var burg="";
 //require("./controllers/burgers_controller")(app);
//other way to do import module. other than import from or using exports variable
 // var Foo = require('./routes/html-routes');
// Foo(app);
app.use(express.static("public"));
//for express.post
app.use(express.json()); 
app.use(express.urlencoded({ extended: true }));


 app.use("/", burgerRouter.router);
 //let burg= burgerRouter.mainFunc;
//console.log(burg.first);

// db.sync().then(function(){


  
//   });
//intitialization render location "/" and what to use "index"
app.get("/", function (req, res) {
  burgerRouter.mainFunc.first(function(burg){
    console.log(burg);
    res.render("index",{ cheese : burg });
  });
  //let burg2= JSON.stringify(burg);
  
 
});


// app.get("/", function(req, res) {
//   console.log(req);
//   connection.query('SELECT burger_name FROM burgers_db.burgers', (err, res) => {
//              if (err) throw err;(function(data) {
//     var hbsObject = {
//       cheesburger: data
//     };
//    // console.log(hbsObject);
//     res.render("index", hbsObject);
//   });
// });

// });

app.listen(PORT, function() {
  console.log("App now listening at localhost:" + PORT);
});


//console.log(burgerRouter.burgerTRUE);
  //recieving post request from form data in add.js
  // app.post("/new", (req, res) => {
  //   console.log(req.body.name);
  //   const data = req.body;
  //   res.json({
  //     status: "success",
  //     data: data,
  //     specificData: req.body.name
  //   });
  // })