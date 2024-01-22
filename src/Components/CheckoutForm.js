// CheckoutForm.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../Styles/CheckoutForm.css';

const CheckoutForm = () => {
  const navigate = useNavigate();

  const [name, setName] = useState('');
  const [mobile, setMobile] = useState('');
  const [address, setAddress] = useState('');
  const [email, setEmail] = useState('');

  const handleCheckout = () => {
    if (name && mobile && address && email) {

      navigate('/');
      localStorage.removeItem('cart');
      alert('Order successfully completed!');
    } else {
      alert('Please fill in all fields.');
    }
  };

  const handleCancel = () => {
    // Clear form fields and close the checkout form
    setName('');
    setMobile('');
    setAddress('');
    setEmail('');
  };

  return (
    <div className="checkout-form-container">
      <h2>Checkout</h2>
      <label>Name:</label>
      <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
      <label>Mobile:</label>
      <input type="text" value={mobile} onChange={(e) => setMobile(e.target.value)} />
      <label>Address:</label>
      <textarea value={address} onChange={(e) => setAddress(e.target.value)} />
      <label>Email:</label>
      <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />

      <div className="checkout-buttons">
        <button onClick={handleCheckout}>Checkout</button>
        <button onClick={handleCancel}>Cancel</button>
      </div>
    </div>
  );
};

export default CheckoutForm;
