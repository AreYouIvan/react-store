import React, { useContext } from "react";
import styles from "./OrderItem.module.scss";
import { AppContext } from "../../context/AppContext";
import close from "../../assets/icons/icon_close.png";
import Image from "next/image";

const OrderItem = ({ product }) => {
  const { removeFromCart } = useContext(AppContext);
  const handleRemove = item => {
    removeFromCart(item);
  };
  return (
    <div className={styles["shopping-cart"]}>
      <figure>
        {product?.images[0] && (
          <Image
            src={product?.images[0]}
            alt={product?.title}
            width={240}
            height={240}
          />
        )}
      </figure>
      <p>{product?.title}</p>
      <p>${product?.price}</p>
      <Image src={close} alt="close" onClick={() => handleRemove(product)} />
    </div>
  );
};

export { OrderItem };