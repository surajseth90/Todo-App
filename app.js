const express = require("express");
const bodyParser = require("body-parser");

var app = express();
app.set("view engine", "ejs"); // for EJS
app.use(express.static('public')) // it tells to express o serve all the static file present in public folder.
app.use(express.urlencoded({ extended: true }));

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
