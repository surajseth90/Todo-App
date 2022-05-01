const express = require("express");
const bodyParser = require("body-parser");

var app = express();
app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: true }));

var example = "working";

app.get("/", function (req, res) {
  res.render("list", { exej: example }); //render is used rather than send while using ejs
});

app.post("/", function (req, res) {
  console.log("name", req.body.ele1);
});

app.listen(8000, function () {
  console.log("Server Started");
});
