// src/utils/api.js
import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:5000/api/cart',
});

// Add item to cart
export const addToCartAPI = async (item) => {
  return await api.post('/', item);
};

// Get all cart items
export const getCartAPI = async () => {
  return await api.get('/');
};

// Update quantity
export const updateCartItemAPI = async (id, quantity) => {
  return await api.put(`/${id}`, { quantity });
};

// Remove from cart
export const removeCartItemAPI = async (id) => {
  return await api.delete(`/${id}`);
};
