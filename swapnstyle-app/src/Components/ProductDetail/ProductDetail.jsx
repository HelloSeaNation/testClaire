import React, { useContext, useEffect } from "react";
import './ProductDetail.css'
import { IoIosStar } from "react-icons/io";
import { IoIosStarHalf } from "react-icons/io";
import Footer from "../Footer/Footer";
import Avatar from "../Assets/Avatar.png";
import Buyer from "../Assets/review_pc.jpg";
import { ShopContext } from "../../Context/ShopContext";


function ProductDetail (props){
  const {product} =props;
  const {addToCart} = useContext(ShopContext);

  useEffect(() => {
    window.scrollTo(0, 0); 
  }, []);


  return(
    
    <div>   
    <div className="productdetail">
      <div className="productdeatil-left">
        <div className="img-list">
          <img src={product.image} alt="" />
          <img src={product.image} alt="" />
          <img src={product.image} alt="" />
          <img src={product.image} alt="" />
        </div>
        <div className="product-img">
          <img className="main-img" src={product.image} alt="" />
        </div>
      </div>

      <div className="productdetail-right">
        <h1>{product.name}</h1>            
       <div className="seller-info">
        <img  className="seller" src={ Avatar} alt="seller"/>
        <div className="right-start">
          <p className="user-name">Charlotte&nbsp;&nbsp;</p>           
        <div className="star-ratings">         
          <IoIosStar color='#ff5656' />
          <IoIosStar color='#ff5656' />
          <IoIosStar color='#ff5656'/>
          <IoIosStar color='#ff5656'/>
          <IoIosStarHalf color='#ff5656'/>        
          &nbsp;&nbsp;(&nbsp;7&nbsp;)      
        </div>                        
        </div>
        <div>
          <button className="ask-btn">Ask seller</button>    
        </div>
        </div>
        <div className="product-price">
          ${product.price}     
        </div>
        <div className="description">
          <h3>Size:M</h3>
          <p>Worn only a few times, still in great condition.</p>        
        </div>
        <button onClick={()=>{addToCart(product.id)}} className="addtocart-btn">ADD TO CART</button>  
        <div>
          <div className="line"><hr/></div>   
          <div className="reviews">
            <h2>Recent reviews</h2>
            <p>See more</p>
          </div>
          <div className="review-info">
          <IoIosStar color='#ff5656'/>
          <IoIosStar color='#ff5656'/>
          <IoIosStar color='#ff5656'/>
          <IoIosStar color='#ff5656'/>
          <IoIosStar color='#ff5656'/>          
          <p>by anna236  &nbsp;/  &nbsp;7 day ago</p>
          </div>
          </div>
          <div className="buyer-review">
            <img className="buyer-pc" src={Buyer} alt="buyer-pc" />
            <p className="buyer-reviews">Perfect condition! <br/>Seller was so considerate and shipped incredibly quick.</p>
          </div>    
      </div>                      
    </div>
    <Footer/>   
    </div>
   
    
  );
}

export default ProductDetail