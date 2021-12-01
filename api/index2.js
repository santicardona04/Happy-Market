require("./src/config/connectDB")

const Product = require("./src/models/products")

async function main(){
    // const product = new Product({
    //     name:"granola",
    //     description :" hola",
    //     price : 10,
    //     stock: 2,
    //     image: "https://cdn2.cocinadelirante.com/sites/default/files/images/2020/10/receta-de-granola-con-avena.jpg",
    //     category: "frutos",

    // })
    // const producteSaved = await product.save()
    // console.log(producteSaved)
    const product = await Product.find()
    console.log(product)

}
module.exports = main