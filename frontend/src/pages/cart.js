import React, { useContext } from "react";
import { CartContext } from "../context/CartContext";

const Cart = () => {
  const { cartItems, increaseQty, decreaseQty } = useContext(CartContext);
  const totalPrice = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );
  const totalItems = cartItems.reduce(
    (total, item) => total + item.quantity,
    0
  );

  return (
    <section className="menu section">
      <div className="title">
        <h2>Your Cart</h2>
        <div className="underline"></div>
      </div>
      <div className="section-center">
        {cartItems.length === 0 ? (
          <h4>No items in cart</h4>
        ) : (
          cartItems.map((item) => (
            <article key={item.id} className="menu-item">
              <img src={item.img} alt={item.title} className="photo" />
              <div className="item-info">
                <header
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                  }}
                >
                  <h4>{item.title}</h4>
                  <h5 className="price">Rs {item.price}</h5>
                </header>
                <div
                  style={{
                    marginTop: "0.5rem",
                    display: "flex",
                    alignItems: "center",
                    gap: "1rem",
                  }}
                >
                  <button
                    className="qty-btn plus-btn"
                    onClick={() => increaseQty(item.id)}
                  >
                    +
                  </button>
                  <span>Qty: {item.quantity}</span>
                  <button
                    className="qty-btn minus-btn"
                    onClick={() => decreaseQty(item.id)}
                  >
                    -
                  </button>
                </div>
              </div>
            </article>
          ))
        )}
        {cartItems.length > 0 && (
          <div className="cart-summary-bar">
            <div className="summary-left">
              <p className="summary-line">Order Summary: {totalItems} items</p>
              <h5 className="summary-total">Total: Rs {totalPrice}</h5>
            </div>
            <div className="summary-right">
              <button className="btn btn-warning place-order-button">
                Place Order
              </button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Cart;
