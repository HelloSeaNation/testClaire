
import React, { useState } from "react";
import './AddProduct.css';
import { MdOutlineCloudUpload } from "react-icons/md";

function AddProduct () {
  const [image, setImage] = useState(false); 
  const [productDetails, setProductDetails] = useState({
    name:"",
    image:"",
    category:"women",
    item:"dress", 
    price:""
    })   
   

  const imageHandler = (e) => {
    setImage(e.target.files[0]); 
  }

  const changeHandler =(e) =>{
    setProductDetails({...productDetails,[e.target.name]:e.target.value})
  }

  const Add_Product = async ()=>{
    console.log(productDetails);
    let responseData;
    let product = productDetails;

    let formData = new FormData();
    formData.append('product',image);

    await fetch('http://localhost:4000/upload',{
      method:'POST',
      headers:{
        Accept:'application/json',
      },
      body:formData,
    }).then((resp)=>resp.json()).then((data)=>{responseData=data});
    if(responseData.success){
       product.image = responseData.image_url;
       console.log(product);
       await fetch('http://localhost:4000/addproduct',{
        method:'POST',
        headers:{
          Accept:'application/json',
          'Content-Type':'application/json',
        },
        body:JSON.stringify(product),
       }).then((resp)=>resp.json()).then((data)=>{
          data.success?alert("product Added"):alert("Failed")
       })
    }
  }

  return(   
    <div className="add-product-container">
    <div className="add-product">
      <div className="itemfield">
        <h2>Add your product :</h2>     
   
          <p>Product title</p>  
          <input value={productDetails.name} onChange={changeHandler} type="text" name='name' placeholder="Type here"/>
      </div> 
      <div className="itemfield">
        <div className="item-price">
          <p>Price</p>
          <input value={productDetails.price} onChange={changeHandler} type="text" name="price" placeholder="Type here" />
        </div>  
      </div>
      
      <div className="product-field">
      <div className="itemfield">
        <p>Category</p>
        <select value={productDetails.category} onChange={changeHandler} name="category" className="add-product-selector">
          <option value="women">Women</option>
          <option value="men">Men</option> 
          <option value="kid">Kid</option> 
        </select>
      </div>

      <div className="itemfield">
        <p>Product Category</p>
        <select value={productDetails.item} onChange={changeHandler} name="item" className="add-product-selector">
          <option value="dresses">Dresses</option>
          <option value="tops">Tops</option> 
          <option value="bottoms">Bottoms</option> 
          <option value="jackets">Jackets</option> 
          <option value="accessories">Accessories</option> 
          <option value="shoes">Shoes</option> 
        </select>
      </div>
      </div>

      <div className="itemfield">   
          <p>Description</p>         
      <textarea className="item-description" name="message" rows="4" cols="50" placeholder="Type here"></textarea>
      </div>
  
      <div className="upload-field">
        <label htmlFor="file-input">           
          {image ? 
            <img src={URL.createObjectURL(image)} alt="Selected" className="item-image" />
            :
            <MdOutlineCloudUpload className="item-image" size='50px' color="#565656"/>  
          }
          <p>upload</p>        
        </label>
        <input onChange={imageHandler} type="file" name='image' id='file-input' hidden />
      </div>
 
      <button onClick={()=>{Add_Product();}} className="addproduct-btn" >
        ADD
      </button>
      </div>
    </div>
    
  );
}

export default AddProduct;


