let express = require ("express");

let route = express.Router();


route.get ("/home", (req,res)=>{
    res.send("<h1> This is Teacher Home page </h1>")
})

route.get ("/salary", (req,res)=>{
    res.send("<h1> This is Teacher salary page </h1>")
})

route.get ("/about", (req,res)=>{
    res.send("<h1> This is Teacher about page </h1>")
})

route.get ("/subject", (req,res)=>{
    res.send("<h1> This is Teacher subject page </h1>")
})










module.exports= route





