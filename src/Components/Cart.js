// Cart.js
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FaPlus, FaMinus, FaTrash } from 'react-icons/fa';
import '../Styles/Cart.css';

const Cart = () => {
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem('cart')) || [];
    setCartItems(storedCart);
  }, []);

  const handleIncreaseQuantity = (itemId) => {
    const updatedCart = cartItems.map((item) =>
      item.id === itemId ? { ...item, quantity: item.quantity + 1 } : item
    );

    setCartItems(updatedCart);
    localStorage.setItem('cart', JSON.stringify(updatedCart));
  };

  const handleDecreaseQuantity = (itemId) => {
    const updatedCart = cartItems.map((item) =>
      item.id === itemId && item.quantity > 1 ? { ...item, quantity: item.quantity - 1 } : item
    );

    setCartItems(updatedCart);
    localStorage.setItem('cart', JSON.stringify(updatedCart));
  };

  const handleDeleteItem = (itemId) => {
    const updatedCart = cartItems.filter((item) => item.id !== itemId);

    setCartItems(updatedCart);
    localStorage.setItem('cart', JSON.stringify(updatedCart));
  };

  const calculateTotalPrice = (item) => {
    return item.quantity * item.price;
  };

  const calculateOverallTotal = () => {
    return cartItems.reduce((total, item) => total + calculateTotalPrice(item), 0);
  };

  return (
    <div className="cart-container">
      <h2>Shopping Cart</h2>
      {cartItems.map((item) => (
        <div key={item.id} className="cart-item">
          <img src={item.imageUrl} alt={item.name} />
          <div className="item-details">
            <h3>{item.name}</h3>
            <p>Price: ${item.price}</p>
            <p>Quantity: {item.quantity}</p>
            <p>Total Price: ${calculateTotalPrice(item)}</p>
            <div className="quantity-buttons">
              <button onClick={() => handleDecreaseQuantity(item.id)}>
                <FaMinus />
              </button>
              <button onClick={() => handleIncreaseQuantity(item.id)}>
                <FaPlus />
              </button>
              <button onClick={() => handleDeleteItem(item.id)}>
                <FaTrash />
              </button>
            </div>
          </div>
        </div>
      ))}
      {cartItems.length > 0 && (
        <div className="overall-total">
          <h3>Overall Total: ${calculateOverallTotal()}</h3>
          <Link to="/checkout"><button>Checkout</button></Link>
        </div>
      )}
    </div>
  );
};

export default Cart;
