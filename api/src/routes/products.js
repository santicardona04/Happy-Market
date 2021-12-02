const express = require('express')
const app = express()


// require("./src/config/connectDB")

const Product = require("../models/products.js")


// app.get('/', function (req, res) {
    //   res.send('Hello World')
    // })
    // const getProducts = async (req, res, next) => {
        app.get("/", async(req,res)=>{
        const { name } = req.query;
        try {
            if (name) {
                let productFind = await Product.find({
                    name: { $regex: name, $options: "i" },
                }).populate("category", { name: 1 });
                //   'name': { $regex: name, $options: "i" },
                // }).populate("category", { name: 1, _id: 1});
                if (productFind.length) {
                    res.status(200).json(productFind);
                } else {
                    res.status(200).json([]);
                    
                }
            } else {
                const productFind = await Product.find({})
                res.status(200).json(productFind);
            }
        } catch (err) {
            return err;
        }
    });
    // app.get('/', getProducts)
    module.exports= app;