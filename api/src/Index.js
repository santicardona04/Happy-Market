const express = require("express")
const morgan = require("morgan")
const cors = require("cors")
const connectionDB = require("./connectDB")



require("dotenv").config()


connectionDB()

const app = express()
const port = process.env.PORT || 5000



app.use(cors())
app.use(express.json())


app.listen(port,()=>{
    console.log(`server on ${port}`)
})