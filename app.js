const express = require("express");
const bodyParser = require("body-parser");

var app = express();
app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: true }));

var example = "working";
var items = [];

app.get("/", function (req, res) {
  res.render("list", { ejes: items }); //render is used rather than send while using ejs
});

app.post("/", function (req, res) {
  var item = req.body.ele1;
  items.push(item);
  res.redirect("/");
});

app.listen(8000, function () {
  console.log("Server Started");
});
