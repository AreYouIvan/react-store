import React, { useContext } from "react";
import { AppContext } from "../../context/AppContext";

import styles from "./MyOrder.module.scss";
import arrow from "../../assets/icons/flechita.svg";

import { Order } from "../../components/Order";
import { OrderItem } from "../../components/OrderItem";

const MyOrder = () => {
  const { state } = useContext(AppContext);
  const sumTotal = () => {
    const reducer = (accumulator, currentValue) => {
      return accumulator + currentValue.price;
    }
    const sum = state.cart.reduce(reducer, 0);
    return sum;
  }
  return (
    <>
      <aside className={styles.MyOrder}>
        <div className={styles['title-container']}>
          <img src={arrow} alt="arrow" />
          <p className={styles.title}>My Order</p>
        </div>
        <div className={styles['my-order-content']}>
          {state.cart.map((product) => {
            return (
              <OrderItem product={product} key={`orderItem-${product.id}` } />
            );
          })}
          <div className={styles.order}>
            <p>
              <span>Total</span>
            </p>
            <p>${sumTotal()}</p>
          </div>
          <button className={styles['primary-button']}>Checkout</button>
        </div>
      </aside>
    </>
  );
};

export { MyOrder };
