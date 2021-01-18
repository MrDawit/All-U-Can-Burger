
const express = require('express');
const app = express();
const burgerRouter = require("./controllers/burgers_controller");
const PORT = process.env.PORT || 3030;
const exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({ ext: "handlebars" }));
app.set("view engine", "handlebars");

app.use(express.static("public"));

//for express.post
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


app.use("/", burgerRouter.router);

app.listen(PORT, function () {
  console.log("App now listening at localhost:" + PORT);
});

