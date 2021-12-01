const {Schema, model} = require("mongoose")

const user = new Schema({
    name: {
        type: String,
      },
      surname: {
        type: String,
      },
      nickname: {
          type: String,
          required: false
      },
      email: {
        type: String,
        unique: true,
        required: true,
        
      },
      password: {
        type: String,
      },
      shipping: [{}],
      cart: [
        {
          _id: {
            ref: "Product",
            type: Schema.Types.ObjectId,
          },
          quantity: Number,
        },
      ],
      orders: [
        {
          ref: "Order",
          type: Schema.Types.ObjectId
      }],
      shoppingHistory: [{
          type: Array
      }],
      isAdmin: {
        type: Boolean,
        default: false,
      },
    },
    {
      timestamps: false,
      versionKey: false,
    
})

const User = model("User", user)

module.exports = User