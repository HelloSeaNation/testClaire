
import React, { useEffect, useState } from "react";
import './CSS/ListProduct.css';
import { RiDeleteBin6Line } from "react-icons/ri";
import { FaRegEdit } from "react-icons/fa";



function ListProduct (){
  const [allproduct,setAllProduct] = useState([]);
  const fetchInfo = async ()=>{
    await fetch('http://localhost:4000/allproducts')
    .then((res)=>res.json())
    .then((data)=>{setAllProduct(data)});
  }

  useEffect(()=>{
    fetchInfo();
  },[])

  const remove_product = async(id)=>{
    await fetch('http://localhost:4000/removeproduct',{
      method:'POST',
      headers:{
        Accept:'application/json',
        'Content-Type':'application/json',
      },
      body:JSON.stringify({id:id})
    })
    await fetchInfo();
  }

  return(  
      <div className="list-product">          
        <h1>All Product List</h1>      
          <div className="listproduct-info-main">         
              <h2>Products</h2>
              <h2>Title</h2>
              <h2>Price</h2>
              <h2>Category</h2>
              <h2>Item</h2>
              <h2>Remove</h2>         
              <h2>Edit</h2>         
          </div>              
          <hr />   
      
          {allproduct.map((product) => (                  
            
            <div key={product.id} className="listproduct-info-main">              
              <img src={product.image} alt="" className="listproduct-product-icon" />
              <p>{product.name}</p>
              <p>${product.price}</p>
              <p>{product.category}</p>
              <p>{product.item}</p>
              <RiDeleteBin6Line onClick={() => { remove_product(product.id) }} className="remove-icon" />
              <FaRegEdit  className="edit-icon"/>
            </div>
          

          ))}         
        </div>          
  );
}

export default ListProduct




