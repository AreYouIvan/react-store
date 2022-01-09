import React, { useState } from "react";
import "./ProductItem.scss";

import iconAddToCart from '@icons/bt_add_to_cart.svg';

const ProductItem = ({product}) => {
  const [cart, setCart] = useState([]);

  const handleCart = () => {
    setCart([]);
  }


  return (
    <div className="product-card">
      <img
        src={product.images[2]}
        alt=""
      />
      <div className="product-info">
        <div>
          <p>${product.price}</p>
          <p>{product.title}</p>
        </div>
        <figure onClick={handleCart}>
          <img src={iconAddToCart} alt="" />
        </figure>
          {cart}
      </div>
    </div>
  );
};

export { ProductItem };
