
import React from "react";
import './Popular.css';
import data_product from '../Assets/data';
import Item from '../Item/Item';

function Popular ({ searchQuery }) {
  const filteredItems = data_product.filter(item =>
    item.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className='popular'>
      <h1>Popular items</h1>
      <hr/>
      <div className='popular-item'>     
        {filteredItems.map((item, i) => (
          <Item key={i} id={item.id} name={item.name} image={item.image} price={item.price} />
        ))}
      </div>
    </div>
  );
}

export default Popular;

