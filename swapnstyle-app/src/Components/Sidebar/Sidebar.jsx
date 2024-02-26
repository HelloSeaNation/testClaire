import React from "react";
import './Sidebar.css';
import {Link} from 'react-router-dom';
import { MdOutlineLibraryAdd } from "react-icons/md";
import { HiOutlineClipboardDocumentList } from "react-icons/hi2";

function Sidebar (){
  return(
    <div className="sidebar">            
          <div className="sidebar-item">        
          <MdOutlineLibraryAdd  size='28px' color="#ff5757"/>
          <p>Add Product</p> 
          </div>    
  
      <Link to ={'/listproduct'} style={{textDecoration:"none"}}>
        <div className="sidebar-item">    
          <HiOutlineClipboardDocumentList size='28px' color="#ff5757"/>
          <p>Product List</p> 
         </div>
      </Link>
   </div>

  );
}

export default Sidebar

