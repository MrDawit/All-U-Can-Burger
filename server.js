
const express = require('express');
 const app = express();
//  const path = require('path');
const burgerRouter = require("./controllers/burgers_controller");
var PORT = process.env.PORT || 3030;
// var db = require("./models");
var exphbs = require("express-handlebars");
const burger = require('./models/burger');
 app.engine("handlebars", exphbs({ ext: "handlebars" }));
// app.engine("handlebars", exphbs({ defaultLayout: "main" , layoutsDir: __dirname + "/views/layouts"}));
//  app.set('views', path.join(__dirname,'/views'));
app.set("view engine", "handlebars");

//  Router.router();

// app.use()

 
// require('./routes/html-routes')(app);

var burg={};
 //require("./controllers/burgers_controller")(app);
//other way to do import module. other than import from or using exports variable
 // var Foo = require('./routes/html-routes');
// Foo(app);
app.use(express.static("public"));
//for express.post
app.use(express.json({limit: "1mb"})); 
app.use(express.urlencoded({ extended: true }));


  app.use("/", burgerRouter.router);


// db.sync().then(function(){

    app.listen(PORT, function() {
      console.log("App now listening at localhost:" + PORT);
    });
  
//   });
//intitialization render location "/" and what to use "index"
app.get("/", function (req, res) {
  res.render("index",{burg});
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