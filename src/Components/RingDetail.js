// RingDetails.js
import React, { useState } from 'react';
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

  const [selectedCarat, setSelectedCarat] = useState('18');
  const [selectedRingSize, setSelectedRingSize] = useState('16');
  const [selectedGemstone, setSelectedGemstone] = useState('Ruby');
  const [updatedPrice, setUpdatedPrice] = useState(price);

  const handleApply = () => {
    const caratPrice = selectedCarat === '14' ? -50 : selectedCarat === '20' ? 50 : 0;
    const ringSizePrice = selectedRingSize === '15' ? -20 : selectedRingSize === '18' ? 20 : 0;
    const gemstonePrice =
      selectedGemstone === 'Topaz' ? -30 : selectedGemstone === 'Diamond' ? 100 : 0;

    const newPrice = price + caratPrice + ringSizePrice + gemstonePrice;

    setUpdatedPrice(newPrice);
  };

  const dummyImages = [
    imageUrl,
    'https://www.tanishq.co.in/on/demandware.static/-/Sites-Tanishq-product-catalog/default/dw231b850a/images/hi-res/50D2P2FFFAA10_2.jpg',
    'https://www.tanishq.co.in/on/demandware.static/-/Sites-Tanishq-product-catalog/default/dw505ea267/images/hi-res/50D2PTFWSAA09_2.jpg',
  ];

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const nextImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % dummyImages.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex - 1 + dummyImages.length) % dummyImages.length);
  };

  return (
    <div className="ring-details-overlay">
      <div className="ring-details-container">
        <div className="ring-details-header">
          <h2>{name}</h2>
          <div className="ring-carousel">
            <button onClick={prevImage}>&lt;</button>
            <img src={dummyImages[currentImageIndex]} alt='img' className="ring-details-image"/>
            <button onClick={nextImage}>&gt;</button>
          </div>
        </div>
        <div className="ring-details-content">
          <div className="close-but">
            <button onClick={onClose}>Close</button>
          </div>
          <div className="magnifier" />
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
          <p>
            Price: ${updatedPrice}
          </p>
          <div className="dropdowns">
            <label>
              Carat Points:
              <select value={selectedCarat} onChange={(e) => setSelectedCarat(e.target.value)}>
                <option value="14">14</option>
                <option value="18">18</option>
                <option value="20">20</option>
                <option value="21">21</option>
              </select>
            </label>

            <label>
              Ring Size:
              <select
                value={selectedRingSize}
                onChange={(e) => setSelectedRingSize(e.target.value)}
              >
                <option value="15">15</option>
                <option value="16">16</option>
                <option value="17">17</option>
                <option value="18">18</option>
                <option value="19">19</option>
              </select>
            </label>

            <label>
              Gemstone Type:
              <select
                value={selectedGemstone}
                onChange={(e) => setSelectedGemstone(e.target.value)}
              >
                <option value="Ruby">Ruby</option>
                <option value="Topaz">Topaz</option>
                <option value="Diamond">Diamond</option>
              </select>
            </label>

            <button onClick={handleApply}>Apply</button>
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
