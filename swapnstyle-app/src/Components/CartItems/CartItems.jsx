import React, { useContext } from "react";
import './CartItems.css'
import { ShopContext } from "../../Context/ShopContext";
import { RiDeleteBin6Line } from "react-icons/ri";
import Footer from "../Footer/Footer";

function CartItems (){
  const {getTotalCartAmount,allProducts,cartItems,addToCart,removeFromCart} = useContext(ShopContext);
  return(
    
    <div>       
    <div className="cartitems">
      <div className="cartitems-info ">
        <p>Products</p>
        <p>Title</p>
        <p>Price</p>
        <p>Quantity</p>
        <p>Total</p>
        <p>Remove</p>       
      </div>   
      <div className="cartitem-underline">
         <hr/> 
      </div>
       
      {allProducts.map((e)=>{
        if(cartItems[e.id]>0)
        {
          return <div key={e.id}>
                  <div className="cartitems-format cartitems-info">
                    <img  className="items-image" width="80px"src={e.image} alt="item-PC" />
                    <p>{e.name}</p>
                    <p>${e.price}</p>  
                    <button className="cartitems-quantity">{cartItems[e.id]}</button>
                    <p>${e.price*cartItems[e.id]}</p>               
                    <RiDeleteBin6Line className="remove-icon" onClick={()=>{removeFromCart(e.id)}}/>
                  </div>
                  <div className="cartitem-line">
                    <hr/>
                  </div>
                 </div>   
                                               
        }        
        return null;
        
     
      })}   
    
  
      <div className="cartitems-down">
        <div className="cartitem-total">
          <h1>Cart Total</h1>
          <div>
            <div className="cartitems-total-item">
              <p>Subtatal</p>
              <p>${getTotalCartAmount()}</p>
            </div>
            <div className="total-line">
              <hr />
            </div>
            <div className="cartitems-total-item">
              <p>Shipping Fee</p>
              <p>Free</p>
            </div>
            <div className="total-line">
              < hr/>
            </div>
            <div className="cartitems-total-item">
              <h3>Total</h3>
              <h3>${getTotalCartAmount()}</h3>
            </div>
          </div>
          <div className="cta-btn">
          <button className="checkout-btn">CHECKOUT</button>
          </div>
        </div>  
      </div>    
    </div>
  
       <Footer/>
    </div>
       
  );
}

export default CartItems