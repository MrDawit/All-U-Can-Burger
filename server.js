
const express = require('express');
 const app = express();
//  const path = require('path');
const burgerRouter = require("./controllers/burgers_controller");
var PORT = process.env.PORT || 3030;
// var db = require("./models");

var exphbs = require("express-handlebars");
 app.engine("handlebars", exphbs({ ext: "handlebars" }));
// app.engine("handlebars", exphbs({ defaultLayout: "main" , layoutsDir: __dirname + "/views/layouts"}));
//  app.set('views', path.join(__dirname,'/views'));
app.set("view engine", "handlebars");

//  Router.router();

// app.use()

 
// require('./routes/html-routes')(app);


 //require("./controllers/burgers_controller")(app);
//other way to do import module. other than import from or using exports variable
 // var Foo = require('./routes/html-routes');
// Foo(app);
app.use(express.static("public"));
//for express.post
// app.use(express.json()); 
app.use(express.urlencoded({ extended: true }))

  app.use("/",burgerRouter);
//intitialization render location "/" and what to use "index"
app.get("/", function (req, res) {
  res.render("index");
});

// db.sync().then(function(){

    app.listen(PORT, function() {
      console.log("App now listening at localhost:" + PORT);
    });
  
//   });