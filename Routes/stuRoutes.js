// let express = require ("express");
// let routes = express.Router();


// routes.get("/home", (req,res)=>{
//     res.send("<h1>This is the Home page</h1>")
// })
 

// routes.get("/about", (req,res)=>{
//     res.send("<h1>This is the About page</h1>")
// })
 


// routes.get("/fees", (req,res)=>{
//     res.send("<h1>This is the fees page</h1>")
// })
 


// routes.get("/subject", (req,res)=>{
//     res.send("<h1>This is the Subject page</h1>")
// })

// module.exports=routes;



let express = require ("express");
let route = express.Router();
let stuController = require("../Controller/stuController")


route.get("/home", stuController.homePage)
route.get("/about", stuController.aboutPage)
route.get("/services", stuController.servicePage)
route.get("/placement", stuController.placementPage)
route.get("/gallery", stuController.galleryPage)
route.get("/join", stuController.joinPage)
route.get("/contact", stuController.contactPage)
route.post("/datasave", stuController.dataSave)

module.exports=route;