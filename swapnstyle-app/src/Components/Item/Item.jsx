
import React, { useContext, useState } from 'react';
import './Item.css';
import { FaRegHeart, FaHeart } from 'react-icons/fa';
import { FaCartPlus } from "react-icons/fa6";
import { Link } from 'react-router-dom';
import { ShopContext } from "../../Context/ShopContext";

function Item(props) {
  const [isFavorited, setIsFavorited] = useState(false);
  const { addToCart } = useContext(ShopContext);

  const toggleFavorite = () => {
    setIsFavorited(!isFavorited);
  };

  const handleAddToCart = () => {
    addToCart(props.id);
  };

  return (
    <div className='item'>
      <div className='image-container'>
        <Link to={`/product/${props.id}`}><img src={props.image} alt="item-image" /></Link>
        <div className={`favo ${isFavorited ? 'favorited' : ''}`} onClick={toggleFavorite}>
          {isFavorited ? <FaHeart  color='#FF5757' /> : <FaRegHeart color='#565656' />}
        </div>
      </div>

      <p className='item-name'>
        {props.name}
      </p>
      <div className="item-details">
        <p className='item-prices'>
          ${props.price}
        </p>
        <FaCartPlus className='cart-icon' color='white' onClick={handleAddToCart} />
      </div>
    </div>
  );
}

export default Item;


