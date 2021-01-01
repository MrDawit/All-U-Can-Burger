
const express = require('express');
 const app = express();
//  const path = require('path');


// const burgerRouter = require("./controllers/burgers_controller");
var PORT = process.env.PORT || 3030;
// const Router = require('./controllers/burgers_controller.js');
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

app.use(express.urlencoded({ extended: true }))

app.get("/", function (req, res) {
  res.render("index");
});
// app.use('/todo', burgerRouter)

// db.sync().then(function(){

    app.listen(PORT, function() {
      console.log("App now listening at localhost:" + PORT);
    });
  
//   });