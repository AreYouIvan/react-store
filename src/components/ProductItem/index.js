import React, { useContext } from "react";
import "./ProductItem.scss";
import { AppContext } from "../../context/AppContext";

import iconAddToCart from '@icons/bt_add_to_cart.svg';

const ProductItem = ({ product }) => {
  const { addToCart } = useContext(AppContext);

  const handleCart = (item) => {
    addToCart(item);
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
        <figure onClick={() => handleCart(product)}>
          <img src={iconAddToCart} alt="" />
        </figure>
      </div>
    </div>
  );
};

export { ProductItem };
