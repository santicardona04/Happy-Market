const express = require("express")
const morgan = require("morgan")
const cors = require("cors")
const connectionDB = require("./config/connectDB")
const main = require("../index2")


require("dotenv").config()


connectionDB()
main()


const app = express()
const port = process.env.PORT || 5000



app.use(cors())
app.use(express.json())


app.listen(port,()=>{
    console.log(`server on ${port}`)
})