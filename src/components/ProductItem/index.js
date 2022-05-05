import React, { useContext } from "react";
import styles from "./ProductItem.module.scss";
import { AppContext } from "../../context/AppContext";
import Image from "next/image";

// import iconAddToCart from '@icons/bt_add_to_cart.svg';
import iconAddToCart from "../../assets/icons/bt_add_to_cart.svg";

const ProductItem = ({ product }) => {
  const { addToCart } = useContext(AppContext);

  const handleCart = item => {
    addToCart(item);
  };
  return (
    <div className={styles["product-card"]}>
      {product.images[2] && <Image src={product.images[2]} alt="" width={240} height={240} />}
      <div className={styles["product-info"]}>
        <div>
          <p>${product.price}</p>
          <p>{product.title}</p>
        </div>
        <figure onClick={() => handleCart(product)}>
          <Image src={iconAddToCart} alt="" />
        </figure>
      </div>
    </div>
  );
};

export { ProductItem };
