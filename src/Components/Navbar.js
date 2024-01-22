import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';
import {faCartShopping, faContactBook, faGem, faHeart, faHome, faMagnifyingGlass, faRing} from '@fortawesome/free-solid-svg-icons';
import React, { useState } from 'react';
import "../Styles/Navbar.css";

  

const Navbar=()=>{
    const [searchText, setSearchText] = useState('');

  const handleSearch = () => {
    console.log('Search Text:', searchText);
  };
    return(
        <>
        <div className='nav-main'>
        <div className='nav-heading'>
            <h2>Jewel's<FontAwesomeIcon icon={faGem} className='icons-div'/></h2>
        </div>
        <div className='nav-input'>
      <input
        type="text"
        placeholder="Search gold rings, diamond rings, etc."
        value={searchText}
        onChange={(e) => setSearchText(e.target.value)}
      />
      <button onClick={handleSearch} className='search-icon'> <Link to="/ring-list"><FontAwesomeIcon icon={faMagnifyingGlass} /></Link></button>
    </div>
        <div className='nav-icons'>
        <Link to="/"><FontAwesomeIcon icon={faHome} className='icons-div'/></Link>
        <Link to="/ring-list"><FontAwesomeIcon icon={faRing} className='icons-div'/></Link>
        <Link to="/ring-list"><FontAwesomeIcon icon={faHeart} className='icons-div'/></Link>
        <Link to="/contact"><FontAwesomeIcon icon={faContactBook} className='icons-div'/></Link>
        <Link to="/cart"><FontAwesomeIcon icon={faCartShopping} className='icons-div'/></Link>
        </div>
        </div>
        </>
    )
}
export default Navbar;