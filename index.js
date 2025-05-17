// let express = require ("express");
// let app = express();

// app.get ("/home", (req, res)=>{
//     res.send("<h1> Welcome to Home Page</h1>")
// })
// app.get ("/about", (req, res)=>{
//     res.send("<h1> Welcome to About Page</h1>")
// })
// app.get ("/", (req, res)=>{
//     res.send("<h1> Welcome to Server Page</h1>")
// })

// app.listen(9000, ()=>{
//     console.log("Server run on 9000 port")
// })


// app.listen(9000, ()=>{
//     console.log("Server run on 9000")
// })


let express = require ("express");
let app = express();
let mongoose = require ("mongoose");
let stuRoutes = require("./Routes/stuRoutes");
let bodyParser = require('body-parser');

mongoose.connect("mongodb://localhost:27017/zaiddatabase").then(()=>{
    console.log("MongoDB Successfully Connected ")
})


// Parse incoming requests with JSON payloads
app.use(bodyParser.json());

// Parse incoming requests with urlencoded payloads
app.use(bodyParser.urlencoded({ extended: true }));




app.set("view engine", "ejs");
app.use("/student", stuRoutes);




app.listen(9000, ()=>{
    console.log("Server run on 9000")
})