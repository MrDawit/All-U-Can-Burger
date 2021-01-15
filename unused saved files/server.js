const mysql = require("mysql");
const config = require('./config/connection.js');
const connection = mysql.createConnection(config);


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

//var burg="";
 //require("./controllers/burgers_controller")(app);
//other way to do import module. other than import from or using exports variable
 // var Foo = require('./routes/html-routes');
// Foo(app);
app.use(express.static("public"));
//for express.post
app.use(express.json({limit: "1mb"})); 
app.use(express.urlencoded({ extended: true }));


  app.use("/", burgerRouter.router);
 //let burg= burgerRouter.mainFunc;
//console.log(burg.first);

// db.sync().then(function(){

    app.listen(PORT, function() {
      console.log("App now listening at localhost:" + PORT);
    });
  

  //   const mainFunc = (fakeParam) => {
  //     connection.query(burger.showAll(), (err, res) => {
  //         if (err) throw err;
  //         //IMPORTANT CONSOLE
  
  //         //console.log(res);
  //         let fakeParam= 2;
  //         const burgerTRUE = res[2].burger_name;
  //         //works for 1 result
  //         //const conSole =console.log(burgerTRUE[2].burger_name);
  //         // const conSole =console.log(burgerTRUE);
  
  //         return { burgerTRUE };
  //         // console.log(burgerOne);
  //         // res.send
  //         //  res.render('index', {burgerTRUE})
  //     })
  
  // };

//   const simplerFunction = () => {
//     connection.query(burger.showAll(), (err, res) => {
//         if(err) throw err;
//         //IMPORTANT CONSOLE

//         //console.log(res);
//       //  console.log("res: ", res);
//         const burgerTRUE = res[2].burger_name;
//         //works for 1 result
//         //const conSole =console.log(burgerTRUE[2].burger_name);
//       //  console.log("burgerTrue: ", burgerTRUE);
//         //const conSole = console.log(burgerTRUE);
//        // console.log("YOOOOO");
//         return  burgerTRUE ;
//         // console.log(burgerOne);
//         // res.send
//         //  res.render('index', {burgerTRUE})
//     })
// }
//simplerFunction();




//   });
//intitialization render location "/" and what to use "index"
app.get("/", function (req, res) {
 // let burg= burgerRouter.mainFunc;
 // let burg2= JSON.stringify(burg);


 const simplerFunction = () => {
  connection.query(burger.showAll(), (err, res) => {
      if(err) throw err;
      //IMPORTANT CONSOLE

      //console.log(res);
    //  console.log("res: ", res);
      const burgerTRUE = res[2].burger_name;
      //works for 1 result
      //const conSole =console.log(burgerTRUE[2].burger_name);
      console.log("burgerTrue: ", burgerTRUE);
      //const conSole = console.log(burgerTRUE);
     // console.log("YOOOOO");
      return  burgerTRUE ;
      // console.log(burgerOne);
      // res.send
      //  res.render('index', {burgerTRUE})
  })
}

 //simplerFunction();
 //console.log(burgerTRUE);

 // console.log(mainFunc);
//let burg2 = burg._results.burger_name;
  res.render("index",simplerFunction);
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