import axios from "axios";
import React from "react";
import { useEffect, useState } from "react";

const Product = () => {
  // Note: this id should come from api
  const [products,setProducts] = useState([])
  const [cart,setCart] = useState([])

  useEffect(()=>{
    axios.get("http://localhost:8080/products").then((res)=>setProducts(res.data))
  },[])
  useEffect(()=>{
    axios.get("http://localhost:8080/cartItems").then((res)=>setCart(res.data))
  },[])
  console.log(products)
  const product = { id: 1 };
  return (
    <div>
    {products.map((product)=>(
    <div data-cy={`product-${product.id}`}key = {product.id}>

      <h3 data-cy="product-name"></h3>
      <h6 data-cy="product-description"></h6>
      <button data-cy="product-add-item-to-cart-button">Add to cart</button>
      <div>
        <button data-cy="product-increment-cart-item-count-button">+</button>
        <span data-cy="product-count">
          {
            // Count here from CartItems
          }
        </span>
        <button data-cy="product-decrement-cart-item-count-button">-</button>
        <button data-cy="product-remove-cart-item-button">Remove from cart</button>
      </div>
    </div>
    ))}

    </div>
  );
};

export default Product;
