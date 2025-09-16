import React, { useEffect, useState } from 'react';
import {
  fetchCartItems,
  removeCartItem,
  updateCartItem,
  clearCart
} from '../services/cartService';

const CartPage = () => {
  const [cartItems, setCartItems] = useState([]);

  const loadCart = async () => {
    try {
      const items = await fetchCartItems();
      setCartItems(items);
    } catch (err) {
      console.error('❌ Failed to load cart items:', err);
    }
  };

  useEffect(() => {
    loadCart();
  }, []);

  const handleRemove = async (id) => {
    await removeCartItem(id);
    loadCart(); // reload cart
  };

  const updateQuantity = async (id, newQty) => {
    if (newQty < 1) return;
    await updateCartItem(id, newQty);
    loadCart();
  };

  const handleClearCart = async () => {
    await clearCart();
    loadCart();
  };

  const totalPrice = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  return (
    <div className="container mt-4">
      <h2 className="mb-4">Your Cart</h2>

      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <>
          <div className="row">
            {cartItems.map((item) => (
              <div className="col-md-4 mb-3" key={item._id}>
                <div className="card">
                  <img
                    src={item.img}
                    className="card-img-top"
                    alt={item.title}
                  />
                  <div className="card-body">
                    <h5 className="card-title">{item.title}</h5>
                    <p className="card-text">Price: ₹{item.price}</p>
                    <div className="d-flex align-items-center mb-2">
                      <button
                        className="btn btn-sm btn-secondary me-2"
                        onClick={() => updateQuantity(item._id, item.quantity - 1)}
                        disabled={item.quantity <= 1}
                      >
                        -
                      </button>
                      <span>{item.quantity}</span>
                      <button
                        className="btn btn-sm btn-secondary ms-2"
                        onClick={() => updateQuantity(item._id, item.quantity + 1)}
                      >
                        +
                      </button>
                    </div>
                    <button
                      className="btn btn-danger btn-sm"
                      onClick={() => handleRemove(item._id)}
                    >
                      Remove
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-4">
            <h4>Total: ₹{totalPrice}</h4>
            <button className="btn btn-warning mt-2" onClick={handleClearCart}>
              Clear Cart
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default CartPage;
