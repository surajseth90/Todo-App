const express = require("express")
const bodyParser = require("body-parser")

var app = express();
app.set("view engine","ejs")
app.use(express.urlencoded({extended:true}))

app.get("/",function(req,res){
res.send("This is initial code structure")
})





app.listen(8000,function(){
    console.log("Server Started");
})