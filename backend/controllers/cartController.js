const CartItem = require('../models/CartItem');

// @desc    Get all cart items
// @route   GET /api/cart
exports.getCartItems = async (req, res) => {
  try {
    const items = await CartItem.find();
    res.status(200).json(items);
  } catch (err) {
    res.status(500).json({ error: 'Server Error' });
  }
};

// @desc    Add item to cart
// @route   POST /api/cart
// controllers/cartController.js
// @desc    Add item to cart
// @route   POST /api/cart
exports.addToCart = async (req, res) => {
  try {
    console.log("Received Add to Cart Request:", req.body);  // Log request body

    const newItem = new CartItem(req.body);
    await newItem.save();
    res.status(201).json(newItem);
  } catch (err) {
    console.error("❌ Error in addToCart:", err);  // Log the error
    res.status(500).json({ message: 'Server Error', error: err.message });
  }
};



// @desc    Update item quantity (+/-)
// @route   PUT /api/cart/:id
exports.updateCartItem = async (req, res) => {
  const { quantity } = req.body;

  try {
    const item = await CartItem.findById(req.params.id);
    if (!item) return res.status(404).json({ error: 'Item not found' });

    item.quantity = quantity;
    await item.save();
    res.status(200).json(item);
  } catch (err) {
    res.status(500).json({ error: 'Server Error' });
  }
};

// @desc    Remove item from cart
// @route   DELETE /api/cart/:id
exports.removeCartItem = async (req, res) => {
  try {
    const item = await CartItem.findByIdAndDelete(req.params.id);
    if (!item) return res.status(404).json({ error: 'Item not found' });

    res.status(200).json({ message: 'Item removed from cart' });
  } catch (err) {
    res.status(500).json({ error: 'Server Error' });
  }
};

// @desc    Clear entire cart
// @route   DELETE /api/cart
exports.clearCart = async (req, res) => {
  try {
    await CartItem.deleteMany();
    res.status(200).json({ message: 'Cart cleared' });
  } catch (err) {
    res.status(500).json({ error: 'Server Error' });
  }
};
