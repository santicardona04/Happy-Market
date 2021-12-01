require("dotenv").config()
const{DB_URI} = process.env

const mongoose = require("mongoose")

let connectionDB = () => {
    mongoose.connect("mongodb+srv://Admin01:Happymarket01@cluster0.qooue.mongodb.net/test"
        , {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }).then(()=>{
        console.log("conection succeed")
    }).catch((e)=>{
        console.log(e)
    })
}
  
  module.exports = connectionDB;