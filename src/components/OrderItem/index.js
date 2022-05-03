import React, { useContext } from 'react';
import './OrderItem.module.scss'
import { AppContext } from '../../context/AppContext';
import close from '../../assets/icons/icon_close.png'

const OrderItem = ({ product }) => {
  const { removeFromCart } = useContext(AppContext);
  const handleRemove = (item) => {
    removeFromCart(item);
  }
  return (
    <div className={styles["shopping-cart"]}>
      <figure>
        <img src={product.images[0]} alt={product.title} />
      </figure>
      <p>{product.title}</p>
      <p>${product.price}</p>
      <img src={close} alt="close" onClick={() => handleRemove(product)} />
    </div>
  );
}

export { OrderItem };