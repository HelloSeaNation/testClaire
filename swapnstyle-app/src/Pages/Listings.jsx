import React from "react";
import Sidebar from "../Components/Sidebar/Sidebar";
import './CSS/Listings.css';
import AddProduct from "../Components/AddProduct/AddProduct";






function Listings (){
  return(
    <div className="listings"  >
      <Sidebar/>
      <AddProduct />     
   
    </div>
  );
}

export default Listings