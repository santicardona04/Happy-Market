const {Schema, model} = require("mongoose")

const product = new Schema({
    
    name: {
        type: String,
        unique: true,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    stock: {
        type: Number,
        required: true
    },
    image: {
        type: String,
        required: true,
    },
    category:{
        type: String,
        required: true
    }
    
},
{
    timestamps: false,
    versionKey: false,
  }
)

const Product = model("Product", product)

module.exports = Product