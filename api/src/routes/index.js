const { Router } = require('express');
const product = require("./products.js")
const order = require("../models/order")
const user = require("../models/users")

const router = Router()

router.use("/products", product)
router.use("/order", order)
router.use("/user", user)
const express = require('express')
// const app = express()
 
// router.get('/', function (req, res) {
//   res.send('Hello World')
// })
 

module.exports = router