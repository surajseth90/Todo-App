const express = require("express");
const bodyParser = require("body-parser");

var app = express();
app.set("view engine", "ejs"); // for EJS
app.use(express.static("public")); // it tells to express o serve all the static file present in public folder.
app.use(express.urlencoded({ extended: true }));

const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost:27017/todo");
const trySchema = new mongoose.Schema({
  name: String,
});

const item = mongoose.model("task", trySchema);

app.get("/", function (req, res) {
  item.find({}, function (err, items) {
    if (!err) {
      res.render("list", { ejes: items });
    }
  });
});

app.post("/", function (req, res) {
  const itemName = req.body.ele1;
  const todo = new item({
    name: itemName,
  });
  todo.save();
  res.redirect("/");
});

app.listen(8000, function () {
  console.log("Server Started");
});
