const mongoose = require('mongoose');

const CartItemSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  quantity: {
    type: Number,
    default: 1,
  },
  img: {
    type: String,
    required: false, // optional
  }
}, {
  timestamps: true,
});

const CartItem = mongoose.model('CartItem', CartItemSchema);
module.exports = CartItem;
