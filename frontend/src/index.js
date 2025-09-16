import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.css'  
import App from './App';
import { CartProvider } from './context/CartContext';
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import "@fortawesome/fontawesome-free/css/all.min.css";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <CartProvider>
    <App />
  </CartProvider>
);



