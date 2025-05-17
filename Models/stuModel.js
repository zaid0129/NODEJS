let mongoose = require("mongoose");
let stuSchema = new mongoose.Schema ({
    rollno:Number,
    name:String,
    city:String,
    fees:Number
})

module.exports = mongoose.model("mystudent", stuSchema )