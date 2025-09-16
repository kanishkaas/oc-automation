import axios from 'axios';

const API_URL = 'http://localhost:5000/api/cart';

export const addToCart = async (item) => {
  try {
    const response = await axios.post(API_URL, {
      title: item.title,        
      price: item.price,
      img: item.img,
      quantity: 1             
    });
    return response.data;
  } catch (error) {
    console.error('Error adding item to cart:', error);
    throw error;
  }
};


export const fetchCartItems = async () => {
  try {
    const response = await axios.get(API_URL);
    return response.data;
  } catch (error) {
    console.error('Error fetching cart items:', error);
    throw error;
  }
};

export const removeCartItem = async (id) => {
  try {
    await axios.delete(`${API_URL}/${id}`);
  } catch (error) {
    console.error('Error removing cart item:', error);
    throw error;
  }
};

export const updateCartItem = async (id, quantity) => {
  try {
    await axios.put(`${API_URL}/${id}`, { quantity });
  } catch (error) {
    console.error('Error updating quantity:', error);
    throw error;
  }
};

export const clearCart = async () => {
  try {
    await axios.delete(API_URL);
  } catch (error) {
    console.error('Error clearing cart:', error);
    throw error;
  }
};
