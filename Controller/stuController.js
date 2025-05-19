let stuModel = require("../Models/stuModel")

let homePage= (req, res)=>{
res.render("home")
}

let aboutPage= async(req, res)=>{
    let Data = await stuModel.find();
    console.log(Data)
res.render("about")
} 

let servicePage= (req, res)=>{
res.render("services")
}

let galleryPage= (req, res)=>{
res.render("gallery")
}

let placementPage= (req, res)=>{
res.render("placement")
}

let joinPage= (req, res)=>{
res.render("join")
}


let contactPage= (req, res)=>{
res.render("contact")
}


const dataSave=async(req,res)=>{
    const {rno,name,city,fees}=req.body
   await stuModel.create({
        rollno:rno,
        name:name,
        city:city,
        fees:fees
    })
    console.log(req.body)
res.render("home")

}


module.exports= {
    homePage,
    aboutPage, 
    contactPage,
    servicePage,
    galleryPage,
    placementPage,
    joinPage,
    dataSave,
}