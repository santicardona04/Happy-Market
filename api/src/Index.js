const express = require("express")
const morgan = require("morgan")
const bodyParser = require("body-parser")
const cors = require("cors")
const connectionDB = require("./config/connectDB")
const main = require("../index2")


require("dotenv").config()


connectionDB()
// main()


const app = express()
const port = process.env.PORT || 5000

//middleware

app.use(morgan('dev'));
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json({extended:true}));
app.use(cors())
app.use(express.json())

//routes
app.use('/',require('./routes/index.js'))

app.get('/', function (req, res) {
  res.send('Hello World')
})
 
app.listen(port,()=>{
    console.log(`server on ${port}`)
})


 
