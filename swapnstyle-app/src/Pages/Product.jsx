
import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import Breadcrum from "../Components/Breadcrums/Breadcrums";
import ProductDetail from "../Components/ProductDetail/ProductDetail";
import { ShopContext } from "../Context/ShopContext";


function Product() {
  const { dress_product } = useContext(ShopContext);
  const { productId } = useParams();
  const product = dress_product.find((e) => e.id === Number(productId));
  
  return (
    <div>
         <Breadcrum product={product}/>
         <ProductDetail product={product}/>
    </div>
  );

}

export default Product;
