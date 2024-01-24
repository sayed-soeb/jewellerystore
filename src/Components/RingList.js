// RingList.js
import React, { useState } from 'react';
import RingDetail from './RingDetail';
import { FaCartPlus } from 'react-icons/fa';
import '../Styles/RingList.css';

const RingList = () => {
  const initialRings = [
    { id: 1, name: 'Elegant Diamond Ring',description: 'Delicate yet enchanting, this teardrop style ring is crafted in 18 karat rose gold, studded with diamonds. Stone Clarity: SI2', price: 500, category: 'Wedding', imageUrl: 'https://kinclimg5.bluestone.com/f_webp,c_scale,w_1024,b_rgb:f0f0f0/giproduct/BISS0103R657_YAA18DIG6XXXXXXXX_ABCD00-PICS-00001-1024-26810.png' },
    { id: 2, name: 'Eternal Gold Ring',description: 'Delicate yet enchanting, this teardrop style ring is crafted in 18 karat rose gold, studded with diamonds. Stone Clarity: SI2', price: 300, category: 'Engagement', imageUrl: 'https://kinclimg6.bluestone.com/f_webp,c_scale,w_1024,b_rgb:f0f0f0/giproduct/BIJP0630R04_YAA18DIG6XXXXXXXX_ABCD00-PICS-00001-1024-65668.png' },
    { id: 3, name: 'Korean Diamond Ring',description: 'Delicate yet enchanting, this teardrop style ring is crafted in 18 karat rose gold, studded with diamonds. Stone Clarity: SI2', price: 400, category: 'Wedding', imageUrl: 'https://www.tanishq.co.in/on/demandware.static/-/Sites-Tanishq-product-catalog/default/dwfd996d94/images/hi-res/501145FAAAC02_2.jpg' },
    { id: 4, name: 'Gregorian Gold Ring',description: 'Delicate yet enchanting, this teardrop style ring is crafted in 18 karat rose gold, studded with diamonds. Stone Clarity: SI2', price: 300, category: 'Engagement', imageUrl: 'https://kinclimg9.bluestone.com/f_webp,c_scale,w_1024,b_rgb:f0f0f0/giproduct/BIPO0778R27_YAA18DIG6XXXXXXXX_ABCD00-PICS-00001-1024-72169.png' },
    { id: 5, name: 'Samba Diamond Ring',description: 'Delicate yet enchanting, this teardrop style ring is crafted in 18 karat rose gold, studded with diamonds. Stone Clarity: SI2', price: 700, category: 'Wedding', imageUrl: 'https://kinclimg2.bluestone.com/f_webp,c_scale,w_1024,b_rgb:f0f0f0/giproduct/BIPO0735R03_YAA18DIG6SYEMXXXX_ABCD00-PICS-00001-1024-66180.png' },
    { id: 6, name: 'Snail Gold Ring',description: 'Delicate yet enchanting, this teardrop style ring is crafted in 18 karat rose gold, studded with diamonds. Stone Clarity: SI2', price: 900, category: 'Engagement', imageUrl: 'https://kinclimg0.bluestone.com/f_webp,c_scale,w_1024,b_rgb:f0f0f0/giproduct/BENS0737R18_RAA18DIG6XXXXXXXX_ABCD00-PICS-00001-1024-70492.png' },
    { id: 7, name: 'Dragon Diamond Ring',description: 'Delicate yet enchanting, this teardrop style ring is crafted in 18 karat rose gold, studded with diamonds. Stone Clarity: SI2', price: 500, category: 'Wedding', imageUrl: 'https://kinclimg6.bluestone.com/f_webp,c_scale,w_1024,b_rgb:f0f0f0/giproduct/BINK0421R03_YAA18DIG6XXXXXXXX_ABCD00-PICS-00001-1024-56491.png' },
    { id: 8, name: 'Arabian Gold Ring',description: 'Delicate yet enchanting, this teardrop style ring is crafted in 18 karat rose gold, studded with diamonds. Stone Clarity: SI2', price: 800, category: 'Engagement', imageUrl: 'https://kinclimg6.bluestone.com/f_webp,c_scale,w_1024,b_rgb:f0f0f0/giproduct/BISP0096R06_YAA18DIG6XXXXXXXX_ABCD00-PICS-00001-1024-23645.png' },
    { id: 9, name: 'Japanese Diamond Ring',description: 'Delicate yet enchanting, this teardrop style ring is crafted in 18 karat rose gold, studded with diamonds. Stone Clarity: SI2', price: 600, category: 'Wedding', imageUrl: 'https://kinclimg9.bluestone.com/f_webp,c_scale,w_1024,b_rgb:f0f0f0/giproduct/BIID0421R45_YAA18DIG6XXXXXXXX_ABCD00-PICS-00001-1024-36155.png' },
    { id: 10, name: 'Pongya Gold Ring',description: 'Delicate yet enchanting, this teardrop style ring is crafted in 18 karat rose gold, studded with diamonds. Stone Clarity: SI2', price: 200, category: 'Engagement', imageUrl: 'https://kinclimg3.bluestone.com/f_webp,c_scale,w_1024,b_rgb:f0f0f0/giproduct/BICM0339R06_YAA18DIG6XXXXXXXX_ABCD00-PICS-00001-1024-68695.png' },
    { id: 11, name: 'Elegant Diamond Ring',description: 'Delicate yet enchanting, this teardrop style ring is crafted in 18 karat rose gold, studded with diamonds. Stone Clarity: SI2', price: 500, category: 'Wedding', imageUrl: 'https://kinclimg8.bluestone.com/f_webp,c_scale,w_1024,b_rgb:f0f0f0/giproduct/BIVS0451R17_YAA18DIG6XXXXXXXX_ABCD00-PICS-00001-1024-72189.png' },
    { id: 12, name: 'Eternal Gold Ring',description: 'Delicate yet enchanting, this teardrop style ring is crafted in 18 karat rose gold, studded with diamonds. Stone Clarity: SI2', price: 300, category: 'Engagement', imageUrl: 'https://kinclimg3.bluestone.com/f_webp,c_scale,w_1024,b_rgb:f0f0f0/giproduct/BIAR0097R11_YAA18DIG6XXXXXXXX_ABCD00-PICS-00001-1024-17347.png' },
    { id: 13, name: 'Korean Diamond Ring',description: 'Delicate yet enchanting, this teardrop style ring is crafted in 18 karat rose gold, studded with diamonds. Stone Clarity: SI2', price: 400, category: 'Wedding', imageUrl: 'https://kinclimg4.bluestone.com/f_webp,c_scale,w_1024,b_rgb:f0f0f0/giproduct/BIDG0319R196_YAA18DIG6XXXXXXXX_ABCD00-PICS-00001-1024-22561.png' },
    { id: 14, name: 'Gregorian Gold Ring',description: 'Delicate yet enchanting, this teardrop style ring is crafted in 18 karat rose gold, studded with diamonds. Stone Clarity: SI2', price: 300, category: 'Engagement', imageUrl: 'https://kinclimg6.bluestone.com/f_webp,c_scale,w_1024,b_rgb:f0f0f0/giproduct/BIDG0319R199_YAA18DIG6XXXXXXXX_ABCD00-PICS-00001-1024-66193.png' },
  ];

  const [rings, setRings] = useState(initialRings);
  const [selectedRing, setSelectedRing] = useState(null);
  const [minPrice, setMinPrice] = useState('');
  const [maxPrice, setMaxPrice] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const handleFilter = (category) => {
    setSelectedCategory(category);
    if (category === 'all') {
      setRings(initialRings);
    } else {
      const filteredRings = initialRings.filter((ring) => ring.category === category);
      setRings(filteredRings);
    }
  };

  const handlePriceFilter = (min, max) => {
    let filteredRings = initialRings;

    if (!isNaN(min)) {
      filteredRings = filteredRings.filter((ring) => ring.price >= min);
    }

    if (!isNaN(max)) {
      filteredRings = filteredRings.filter((ring) => ring.price <= max);
    }

    setRings(filteredRings);
  };

  const handleRingClick = (ring) => {
    setSelectedRing(ring);
  };

  const handleCloseDetails = () => {
    setSelectedRing(null);
  };

  const handleAddToCart = (event, ring) => {
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

  const handleCategoryFilter = (category) => {
    if (selectedCategory === category) {
      // Deselect category if already selected
      handleFilter('all');
    } else {
      handleFilter(category);
    }
  };

  const handlePriceRangeFilter = (min, max) => {
    setMinPrice(min);
    setMaxPrice(max);
    handlePriceFilter(min, max);
  };

  const clearFilters = () => {
    setMinPrice('');
    setMaxPrice('');
    handleFilter('all');
  };

  const categoryOptions = ['Wedding', 'Engagement', 'Casual', 'Formal'];
  const gemstoneOptions = ['Diamond','Ruby','Topaz','Korean Diamond'];

  return (
    <div className="main-ring">
      <aside className="filter-section">
        <div className="filter-header">Filter Options</div>
        <div className="filter-category">
          <div className="filter-label">Category:</div>
          {categoryOptions.map((category) => (
            <label key={category} className="filter-checkbox">
              <input
                type="checkbox"
                checked={selectedCategory === category}
                onChange={() => handleCategoryFilter(category)}
              />
              {category}
            </label>
          ))}
        </div>
        <div className="filter-price">
          <div className="filter-label">Filter by Price:</div>
          <label>
            <input
              type="checkbox"
              checked={minPrice !== '' || maxPrice !== ''}
              onChange={clearFilters}
            />
            Clear Filters
          </label>
          <label>
            <input
              type="checkbox"
              checked={minPrice === '' && maxPrice === ''}
              onChange={() => handlePriceRangeFilter('', '')}
            />
            All Prices
          </label>
          <label>
            <input
              type="checkbox"
              checked={minPrice === '' && maxPrice === '200'}
              onChange={() => handlePriceRangeFilter('', '200')}
            />
            $0 - $200
          </label>
          <label>
            <input
              type="checkbox"
              checked={minPrice === '200' && maxPrice === '300'}
              onChange={() => handlePriceRangeFilter('200', '300')}
            />
            $200 - $300
          </label>
          <label>
            <input
              type="checkbox"
              checked={minPrice === '300' && maxPrice === '400'}
              onChange={() => handlePriceRangeFilter('300', '400')}
            />
            $300 - $400
          </label>
          <label>
            <input
              type="checkbox"
              checked={minPrice === '400' && maxPrice === '500'}
              onChange={() => handlePriceRangeFilter('400', '500')}
            />
            $400 - $500
          </label>
          <label>
            <input
              type="checkbox"
              checked={minPrice === '500' && maxPrice === '900'}
              onChange={() => handlePriceRangeFilter('500', '900')}
            />
            $500 - $900
          </label>
        </div>

        <div className="filter-category">
          <div className="filter-label">Gem Stone:</div>
          {gemstoneOptions.map((category) => (
            <label key={category} className="filter-checkbox">
              <input
                type="checkbox"
                checked={selectedCategory === category}
                onChange={() => handleCategoryFilter(category)}
              />
              {category}
            </label>
          ))}
        </div>
      </aside>
      <div className="ring-list">
        {rings.map((ring) => (
          <div key={ring.id} className="ring-item" onClick={() => handleRingClick(ring)}>
            <img src={ring.imageUrl} alt={ring.name} />
            <div className="ring-details">
              {/* <h3>{ring.name}</h3> */}
              <p>Price: ${ring.price}</p>
              {/* <p>Category: {ring.category}</p> */}
              {/* <button onClick={(e) => handleAddToCart(e, ring)}> */}
                {/* <FaCartPlus /> */}
                {/* Add to Cart */}
              {/* </button> */}
            </div>
          </div>
        ))}
      </div>
      {selectedRing && <RingDetail ring={selectedRing} onClose={handleCloseDetails} />}
    </div>
  );
};

export default RingList;