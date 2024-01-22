import React, { useState ,useEffect } from 'react';
import { motion } from "framer-motion";
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { FaFacebook, FaInstagram, FaTimes } from 'react-icons/fa';
import '../Styles/Carousal.css'; // Import your CSS file for styling
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';

const Carousal = () => {
    const images = [
      'https://ddamas.com.bd/wp-content/uploads/2019/11/model-ddamas.jpg',
      'https://ddamas.com.bd/wp-content/uploads/2019/11/Gold-and-diamond-Ring-ddamas.jpg',
      'https://ddamas.com.bd/wp-content/uploads/2019/11/golden-necklace-ddamas-03.jpg',
    ];
  
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
  
    const nextImage = () => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    };
  
    const prevImage = () => {
      setCurrentImageIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
    };

    useEffect(() => {
      const intervalId = setInterval(() => {
        nextImage();
      }, 3000);
  
      return () => clearInterval(intervalId);
    }, [currentImageIndex]);
  
    return (
        <>
        <div className="carousal-container">
            <div className="carousal-heading">
            <motion.h1
            initial={{ x: -200, opacity: 0.1 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}>
             Elegance Meet Desire
             </motion.h1>
             <motion.p
                initial={{ x: -200, opacity: 0.1 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.5 }}>
             Everything you need to shine inner beauty
             </motion.p>
             </div>
        <div className="carousal-wrapper">

          <img className="carousal-image" src={images[currentImageIndex]} alt={`Slide ${currentImageIndex + 1}`} />
        </div>
        <button className="carousal-control carousal-control-prev" onClick={prevImage}>
          <FontAwesomeIcon icon={faChevronLeft} />
        </button>
        <button className="carousal-control carousal-control-next" onClick={nextImage}>
          <FontAwesomeIcon icon={faChevronRight} />
        </button>
      </div>
      <div>
        <div className='heading2'>
            <h2>Ring Collections to match your personality</h2>
        </div>
        <div className="grid-container">
        <motion.div
                initial={{ x: -200, opacity: 0.1 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.5 }}>
      <div className="grid-item"><Link to="/ring-list"><img src='https://ddamas.com.bd/wp-content/uploads/2019/11/Rings-ddamas.jpg' alt='ring1' /></Link></div>
      </motion.div>
      <motion.div
                initial={{ x: 200, opacity: 0.1 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.5 }}>
      <div className="grid-item"><Link to="/ring-list"><img src='https://ddamas.com.bd/wp-content/uploads/2019/11/Neckless-ddamas.jpg' alt='img2' /></Link></div>
      </motion.div>
      <motion.div
                initial={{ x: -200, opacity: 0.1 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.5 }}>
      <div className="grid-item"><Link to="/ring-list"><img src='https://ddamas.com.bd/wp-content/uploads/2019/11/Earring-ddamas.jpg' alt='img3' /></Link></div></motion.div>
      <motion.div
                initial={{ x: 200, opacity: 0.1 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.5 }}>
      <div className="grid-item"><Link to="/ring-list"><img src='https://ddamas.com.bd/wp-content/uploads/2019/11/Bangles-ddamas.jpg' alt='img3' /></Link></div>
      </motion.div>
      <motion.div
                initial={{ x: -200, opacity: 0.1 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.5 }}>
      <div className="grid-item"><Link to="/ring-list"><img src='https://ddamas.com.bd/wp-content/uploads/2019/11/Locket-Long-Set-ddamas.jpg' alt='img3' /></Link></div>
      </motion.div>
      <motion.div
                initial={{ x: 200, opacity: 0.1 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.5 }}>
      <div className="grid-item"><Link to="/ring-list"><img src='https://ddamas.com.bd/wp-content/uploads/2019/11/Locket-ddamas.jpg' alt='img3' /></Link></div></motion.div>
    </div>
      </div>
      <div className='discount'>
        <div >
        <img src='https://i0.wp.com/nivoda.net/wp-content/uploads/2023/08/gemstones-cut-out-three-together-mobile.png?fit=562%2C230&ssl=1' alt='diamonds' />
        </div>
        <div>
        <h3>
        Upto 35% Discount on All Diamond Products
        </h3>
        </div>
        <div>
        <img src='https://i0.wp.com/nivoda.net/wp-content/uploads/2023/08/gemstones-cut-out-three-together-mobile.png?fit=562%2C230&ssl=1' alt='diamonds' />
        </div>
      </div>
      <div className='ceremony'>
      <h3 className='carousal-heading1'>Gorgeous Collection to Give Bridal a New Look</h3>
        <div>
        <img src='https://qph.cf2.quoracdn.net/main-qimg-bfa213035cac8fb51b54e2910a21b1ef' alt='img'/>
        <div className='carousal-but1'>View Bridal Collection</div>
        </div>
        <div>
            <h3 className='carousal-heading2' >Engagement Rings For Unforgottable Moments</h3>
        <img src='https://i0.wp.com/news.thediamondstore.co.uk/wp-content/uploads/2020/03/arab-wedding-wikimedia.jpg?resize=900%2C599&ssl=1' alt='img2' />
        </div>
        <div className='carousal-but2'>View Engagement Collections</div>
      </div>
      <div className="footer-container">
      <div className="footer-content">
        <div className="contact-info">
          <h3 style={{color:"greenyellow"}}>Jewel By Sayed</h3>
          <p>Jewel is a leading brand in the Jewellery Business. We've been contributing in the jewellery industry for many years and determind to provide great services to all of our customer for years to come. Thank You for beliving in us</p>
        </div>
        <div className="contact-info">
          <h3>Contact Information</h3>
          <p>Email: Sayed.soeb1@gmail.com</p>
          <p>Phone: +1 123 456 7890</p>
        </div>
        <div className="social-icons">
          <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
            <FaFacebook />
          </a>
          <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
            <FaInstagram />
          </a>
        </div>
        <div className="close-icon">
          <FaTimes />
        </div>
      </div>
    </div>
      </>
    );
  };
  
  export default Carousal;