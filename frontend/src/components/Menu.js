import React from 'react';
import { addToCart } from '../services/cartService';

const Menu = ({ items }) => {
  const handleAddToCart = async (item) => {
    await addToCart(item);
    alert(`${item.title} added to cart`);
  };

  return (
    <div className="section-center">
      {items.map((menuItem) => {
        const { id, title, img, price } = menuItem;
        return (
          <article key={id} className="menu-item">
            <img src={img} alt={title} className="photo" />
            <div className="item-info">
              <header>
                <h4>{title}</h4>
              </header>
              <h5 className="price">Rs{price}</h5>
            </div>
            <button
              type="button"
              className="btn btn-outline-warning"
              onClick={() => handleAddToCart(menuItem)}
            >
              Add to Cart
            </button>
          </article>
        );
      })}
    </div>
  );
};

export default Menu;
