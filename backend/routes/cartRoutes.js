const express = require('express');
const router = express.Router();

const {
  getCartItems,
  addToCart,
  updateCartItem,
  removeCartItem,
  clearCart,
} = require('../controllers/cartController');

// GET all items
router.get('/', getCartItems);

// POST add new item or increment quantity
router.post('/', addToCart);

// PUT update quantity
router.put('/:id', updateCartItem);

// DELETE one item
router.delete('/:id', removeCartItem);

// DELETE all items
router.delete('/', clearCart);

module.exports = router;
