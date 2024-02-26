

import React, { useContext, useState } from "react";
import Searchbar from "../Components/Searchbar/Searchbar";
import { ShopContext } from "../Context/ShopContext";
import Item from "../Components/Item/Item";
import './CSS/Dresses.css';
import Footer from "../Components/Footer/Footer";


function Dresses (){
  const { dress_product } = useContext(ShopContext);
  const [searchQuery, setSearchQuery] = useState('');  

 
  const filteredDressProducts = dress_product.filter(item => 
    item.id >= 5 && item.id <= 16 && item.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleSearch = (query) => {
    setSearchQuery(query);
  };

  return(
    <div>
      <div>
        <Searchbar onSearch={handleSearch} />      
      </div>

      <div className="dresses-title">
        <h1>Women's Dresses</h1>     
        <hr/>  
      </div> 
      <div className="sortinfo">
        <p>
          <span>Showing 1-{filteredDressProducts.length}</span> out of {dress_product.length} products
        </p>
        <div className="sort-btn">
          <select>
            <option value="sort">Sort by</option>
            <option value="north island">Location</option>
            <option value="aukland">Price</option>
            <option value="canterbury">Size</option>
            <option value="south island">Color</option>
          </select>  
        </div> 
      </div>    

      <div className="dresses">
        <div className='dress-item'>
          {filteredDressProducts.map((item) => (
            <Item key={item.id} id={item.id} name={item.name} image={item.image} price={item.price}/>
          ))}
        </div>    
        <button className="loadmore-btn">Load More</button>
      </div>
      <Footer/>
    </div>
  );
}

export default Dresses;







