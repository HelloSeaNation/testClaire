
import React, { useState } from 'react';
import './Searchbar.css';
import { BiSearchAlt } from "react-icons/bi";

function Searchbar ({onSearch}) {
  const [searchQuery, setSearchQuery] = useState('');

  const handleInputChange = (e) => {
    setSearchQuery(e.target.value);
    onSearch(e.target.value);
  };

  return(  
    <div className='center-container'>
      <div className='search-container'>
        <h1 className='search-title'>Buy, Sell, Find Your Style, Your Way</h1>
        <p className='search-text'>Where every second-hand treasure discovers a new home.</p>
        <div className='input-container'>
          <input type="text" id='search' placeholder='Search here...'
                 value={searchQuery} onChange={handleInputChange}  />
          <BiSearchAlt size='20px' color='#716b6b' className='search-icon' />
        </div>
      </div>
    </div>
  );
}

export default Searchbar