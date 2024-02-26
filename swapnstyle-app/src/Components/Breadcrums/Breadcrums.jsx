import React from "react";
import './Breadcrums.css';
import { MdKeyboardArrowRight } from "react-icons/md";


function Breadcrum (props){
  const{product} = props;
  return(
    <div className="breadcrum">
      Women <MdKeyboardArrowRight/>{product.category}<MdKeyboardArrowRight/>{product.name}

    </div>

  );
}

export default Breadcrum