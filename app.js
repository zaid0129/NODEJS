let express = require ("express");
let app = express();

let stuRoute = require("./Routes/stuRoutes")

let teacherRoute = require("./Routes/teacherRoute")


app.use("/student", stuRoute);

app.use("/teacher", teacherRoute);

app.listen(4000, ()=>{
    console.log("Server run on 4000")
})