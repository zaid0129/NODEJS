let mongoose = require("mongoose");
let stuSchema = new mongoose.Schema ({
    rno:Number,
    name:String,
    city:String,
    fees:Number
})

module.exports = mongoose.model("mystudent", stuSchema )