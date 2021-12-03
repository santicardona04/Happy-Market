const express = require('express')
const app = express()
const Product = require("../models/products.js")



    //OBTENER LOS PRODUCCTOS
    const getProducts = async (req, res, next) => {
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
    };

    //CREAR PRODUCTO
    //name, description, price ,stock, image, category
    const createProduct = async (req, res) => {
        const {name, description, price ,stock, image, category} = req.body
        const product =  await new Product({
            name, description, price ,stock, image, category
        })
      try { product.save() 
    res.send('producto creado')}
    catch(e){
        console.log('error :' , e)
    }
    }
 // EDITAR PRODUCTO
    // const editProduct = async (req,res) => {
    //     let id = req.params._id;
    //     const producto = await Product.findById(id);
    //     // res.render(`/edit_Product/:${id}`,producto)
    //     res.send(producto)
    // }
    // const edit_Product= async (req,res) => {
    //     let id = req.params;
    //     const {name, description, price ,stock, image, category} = req.body
    //     const edit_product = {
    //         name, description, price ,stock, image, category
    //     }
    //     const producto = await  Product.updateOne({id:id} , edit_product)
    //     try { producto.save() 
    //         res.send('producto creado')}
    //         catch(e){
    //             console.log('error :' , e)
    //         }
    //     res.redirect('/')
    // }

    //ELIMINAR PRODUCTO
    const deleteProduct = async (req,res) => {
        const {_id} = req.params
        await Product.findOneAndDelete({_id:_id})
        res.send('producto eliminado')
    }


    //obtener productos
    app.get('/', getProducts)

    //crear productos
    app.post('/createProduct', createProduct)

    //editar productos
    // app.get('/editProduct/:_id', editProduct)
    // app.post('/edit_Product/:_id', edit_Product)

    //eliminar producto
    app.get('/deleteProduct/:_id', deleteProduct)





    module.exports= app;