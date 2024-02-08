const express = require("express")
const ejsmate = require("ejs-mate")
const path = require("path")
const app = express()


app.use(express.static(path.join(__dirname, "public")))
app.use(express.static(__dirname+'/public'));

app.engine("ejs", ejsmate)
app.set("view engine", "ejs")




app.get("/",(req,res)=>{
    res.render("home.ejs")
})
app.get("/student",(req,res)=>{
    res.render("studentlogin.ejs")
})
app.get("/staff",(req,res)=>{
    res.render("stafflogin.ejs")
})
app.get("/admin",(req,res)=>{
    res.render("adminlogin.ejs")
})













app.listen(3000,()=>{      
})