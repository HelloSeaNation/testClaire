
import React, { createContext, useState } from "react";
import dress_product from "../Components/Assets/dress_product";
import data from "../Components/Assets/data"; 

export const ShopContext = createContext(null);

const ShopContextProvider = (props) => { 

  const allProducts = [...dress_product, ...data];

  const getDefaulCart = () =>{
    let cart ={};
    for (let index = 0; index < allProducts.length+1; index++){
      cart[index] = 0;
    }
    return cart;
  }

  const [cartItems,setCartItems] = useState(getDefaulCart());

  const addToCart = (itemId) => {
    setCartItems((prev)=>({...prev,[itemId]:prev[itemId] + 1 }));
  };
  const removeFromCart = (itemId) => {
    setCartItems((prev)=>({...prev,[itemId]:prev[itemId] - 1 }));
  };

  const getTotalCartAmount = () =>{
    let totalAmount = 0;
    for(const item in cartItems)
    {
      if(cartItems[item]>0)
      {
        let itemInfo = allProducts.find((product)=>product.id===Number(item))
        totalAmount += itemInfo.price *cartItems[item];
      }     
    }
    return totalAmount;
  }

  const getTotalCartItems = () =>{
    let totoalItem = 0;
    for(const item in cartItems)
    {
      if(cartItems[item]>0)
      {
        totoalItem += cartItems[item];
      }
    }
    return totoalItem;
  }

  const contextValue = {
    dress_product:allProducts,cartItems,addToCart,removeFromCart, allProducts,
    getTotalCartAmount: getTotalCartAmount,
    getTotalCartItems: getTotalCartItems,
  };

  return (
    <ShopContext.Provider value={contextValue}>
      {props.children}
    </ShopContext.Provider>
  );
}

export default ShopContextProvider;














