// ContactUsForm.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../Styles/ContactUsForm.css';

const ContactUsForm = () => {
  const navigate = useNavigate();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [mobile, setMobile] = useState('');
  const [message, setMessage] = useState('');

  const handleSend = () => {
    navigate('/');
    alert('Message sent successfully!');
  };

  return (
    <div className="form-container">
      <h2>Contact Us</h2>
      <label>Name:</label>
      <input type="text" value={name} onChange={(e) => setName(e.target.value)} />

      <label>Email:</label>
      <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />

      <label>Mobile:</label>
      <input type="text" value={mobile} onChange={(e) => setMobile(e.target.value)} />

      <label>Message:</label>
      <textarea value={message} onChange={(e) => setMessage(e.target.value)} />

      <div className="checkout-buttons">
        <button onClick={handleSend}>Send</button>
      </div>
    </div>
  );
};

export default ContactUsForm;
