const { Router } = require('express');
const product = require("../models/products")
const order = require("../models/order")
const user = require("../models/users")

const router = Router()

router.use("/products", product)
router.use("/order", order)
router.use("/user", user)

module.exports = router