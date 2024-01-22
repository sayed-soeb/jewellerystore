// RingDetails.js
import React from 'react';
import { FaCartPlus } from 'react-icons/fa';
import '../Styles/RingDetail.css';

const RingDetail = ({ ring, onClose }) => {
    const { name, price, imageUrl, description } = ring;
    const specifications = {
      brand: 'Tanishq',
      collection: 'Padmaja',
      gender: 'Women',
      occasion: 'Office Wear',
      karatage: '18',
    };
  
    return (
      <div className="ring-details-overlay">
        <div className="ring-details-container">
          <div className="ring-details-header">
            <h2>{name}</h2>
            <img src={imageUrl} alt={name} className="ring-details-image" />
          </div>
          <div className="ring-details-content">
            <div className='close-but'>
          <button onClick={onClose} >Close</button>
          </div>
            <p>Price: ${price}</p>
            <p>Description: {description}</p>
            <div className="specifications">
              <h3>Specifications</h3>
              <ul>
                {Object.entries(specifications).map(([key, value]) => (
                  <li key={key}>
                    <strong>{key}:</strong> {value}
                  </li>
                ))}
              </ul>
            </div>
            <button>
              <FaCartPlus />
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    );
  };
  
  export default RingDetail;