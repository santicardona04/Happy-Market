const { Schema, model} = require("mongoose")

const order = new Schema({

    buyer: {
        ref: "User",
        type: Schema.Types.ObjectId,
        required: false
    },
    phone: {
        type: Number,
        required: false
    },
    date: String,
      products: [
      {
            _id:{
                ref: "Product",
                type: Schema.Types.ObjectId
            },
            name: String,
            price: Number,
            description: String,
            quantity: Number,
            description: String,
            image: String,
            
       }
      ],
    status: {
        type: String,
        default:"Pending",
        required: true
    },
    shipping: {
		street: String,
		state: String,
        number: Number,
		floor: String,
		zip: Number,
        between: String
	},
    cost: {
        type: Number
    },
    quantity: {
        type: Number
    },
    payment: {
        type: String,
        default:""
    },
    },
{
    timestamps: false,
    versionKey: false,
  }
)

const Order = model('Order', order)

module.exports = Order