require("./src/config/connectDB")

const Product = require("./src/models/products")

async function main(){
    // const product = new Product({
    //     name:"leche de almendras",
    //     description :"leche de almendras",
    //     price : 30,
    //     stock: 10,
    //     image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRdyS25yGOYhoiQkqInuLA_drMsdeEvaFt-ug&usqp=CAU",
    //     category: "aborrates",

    // })
    // const producteSaved = await product.save()
    // console.log(producteSaved)
    const product = await Product.find()
    console.log(product)

}
module.exports = main