// RingList.js
import React, { useState } from 'react';
import RingDetail from './RingDetail';
import { FaCartPlus } from 'react-icons/fa';
import '../Styles/RingList.css';

const RingList = () => {
  const initialRings = [
    { id: 1, name: 'Elegant Diamond Ring',description: 'Delicate yet enchanting, this teardrop style ring is crafted in 18 karat rose gold, studded with diamonds. Stone Clarity: SI2', price: 500, category: 'Wedding', imageUrl: 'https://www.tanishq.co.in/on/demandware.static/-/Sites-Tanishq-product-catalog/default/dw3ff0830f/images/hi-res/50D2PTFYXAA09_2.jpg' },
    { id: 2, name: 'Eternal Gold Ring',description: 'Delicate yet enchanting, this teardrop style ring is crafted in 18 karat rose gold, studded with diamonds. Stone Clarity: SI2', price: 300, category: 'Engagement', imageUrl: 'https://www.tanishq.co.in/on/demandware.static/-/Sites-Tanishq-product-catalog/default/dweb03e28a/images/hi-res/50D3I3FADAB02_2.jpg' },
    { id: 3, name: 'Korean Diamond Ring',description: 'Delicate yet enchanting, this teardrop style ring is crafted in 18 karat rose gold, studded with diamonds. Stone Clarity: SI2', price: 400, category: 'Wedding', imageUrl: 'https://www.tanishq.co.in/on/demandware.static/-/Sites-Tanishq-product-catalog/default/dwfd996d94/images/hi-res/501145FAAAC02_2.jpg' },
    { id: 4, name: 'Gregorian Gold Ring',description: 'Delicate yet enchanting, this teardrop style ring is crafted in 18 karat rose gold, studded with diamonds. Stone Clarity: SI2', price: 300, category: 'Engagement', imageUrl: 'https://www.tanishq.co.in/on/demandware.static/-/Sites-Tanishq-product-catalog/default/dw995ae23b/images/hi-res/50D1I2FFTAA09_2.jpg' },
    { id: 5, name: 'Samba Diamond Ring',description: 'Delicate yet enchanting, this teardrop style ring is crafted in 18 karat rose gold, studded with diamonds. Stone Clarity: SI2', price: 700, category: 'Wedding', imageUrl: 'https://www.tanishq.co.in/on/demandware.static/-/Sites-Tanishq-product-catalog/default/dwebbf22d5/images/hi-res/50D3I3FDVAB02_2.jpg' },
    { id: 6, name: 'Chhapri Gold Ring',description: 'Delicate yet enchanting, this teardrop style ring is crafted in 18 karat rose gold, studded with diamonds. Stone Clarity: SI2', price: 900, category: 'Engagement', imageUrl: 'https://www.tanishq.co.in/on/demandware.static/-/Sites-Tanishq-product-catalog/default/dw8397bd79/images/hi-res/50D3I3FBTAB02_2.jpg' },
    { id: 7, name: 'Dragon Diamond Ring',description: 'Delicate yet enchanting, this teardrop style ring is crafted in 18 karat rose gold, studded with diamonds. Stone Clarity: SI2', price: 50000, category: 'Wedding', imageUrl: 'https://www.tanishq.co.in/on/demandware.static/-/Sites-Tanishq-product-catalog/default/dw0a916127/images/hi-res/50D2CAFAWAA09_2.jpg' },
    { id: 8, name: 'Arabian Gold Ring',description: 'Delicate yet enchanting, this teardrop style ring is crafted in 18 karat rose gold, studded with diamonds. Stone Clarity: SI2', price: 800, category: 'Engagement', imageUrl: 'https://www.tanishq.co.in/on/demandware.static/-/Sites-Tanishq-product-catalog/default/dw9586768f/images/hi-res/502889FCHAA02_2.jpg' },
    { id: 9, name: 'Japanese Diamond Ring',description: 'Delicate yet enchanting, this teardrop style ring is crafted in 18 karat rose gold, studded with diamonds. Stone Clarity: SI2', price: 600, category: 'Wedding', imageUrl: 'https://www.tanishq.co.in/on/demandware.static/-/Sites-Tanishq-product-catalog/default/dwebbf22d5/images/hi-res/50D3I3FDVAB02_2.jpg' },
    { id: 10, name: 'Pongya Gold Ring',description: 'Delicate yet enchanting, this teardrop style ring is crafted in 18 karat rose gold, studded with diamonds. Stone Clarity: SI2', price: 200, category: 'Engagement', imageUrl: 'https://www.tanishq.co.in/on/demandware.static/-/Sites-Tanishq-product-catalog/default/dw8397bd79/images/hi-res/50D3I3FBTAB02_2.jpg' },
  ];

  const [rings, setRings] = useState(initialRings);
  const [selectedRing, setSelectedRing] = useState(null);

  const handleFilter = (category) => {
    if (category === 'all') {
      setRings(initialRings);
    } else {
      const filteredRings = initialRings.filter((ring) => ring.category === category);
      setRings(filteredRings);
    }
  };

  const handleRingClick = (ring) => {
    setSelectedRing(ring);
  };

  const handleCloseDetails = () => {
    setSelectedRing(null);
  };

  const handleAddToCart = (event,ring) => {
    event.stopPropagation();
    const cart = JSON.parse(localStorage.getItem('cart')) || [];

    const existingRing = cart.find((cartItem) => cartItem.id === ring.id);

    if (existingRing) {
      existingRing.quantity += 1;
    } else {
      cart.push({ ...ring, quantity: 1 });
    }

    localStorage.setItem('cart', JSON.stringify(cart));

    alert(`${ring.name} added to cart!`);
  };

  return (
    <div>
      <div className="filter-buttons">
        <button onClick={() => handleFilter('all')}>All</button>
        <button onClick={() => handleFilter('Wedding')}>Wedding</button>
        <button onClick={() => handleFilter('Engagement')}>Engagement</button>
      </div>
      <div className="ring-list">
        {rings.map((ring) => (
          <div key={ring.id} className="ring-item" onClick={() => handleRingClick(ring)}>
            <img src={ring.imageUrl} alt={ring.name} />
            <div className="ring-details">
              <h3>{ring.name}</h3>
              <p>Price: ${ring.price}</p>
              <p>Category: {ring.category}</p>
              <button onClick={(e) => handleAddToCart(e, ring)}>
                <FaCartPlus />
                Add to Cart
              </button>
            </div>
          </div>
        ))}
      </div>
      {selectedRing && <RingDetail ring={selectedRing} onClose={handleCloseDetails}  />}
    </div>
  );
};

export default RingList;
