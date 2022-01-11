import React, { useContext } from "react";
import { AppContext } from "../../context/AppContext";

import "./MyOrder.scss";
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
      <aside className="MyOrder">
        <div className="title-container">
          <img src={arrow} alt="arrow" />
          <p className="title">My Order</p>
        </div>
        <div className="my-order-content">
          {state.cart.map((product) => {
            return (
              <OrderItem product={product} key={`orderItem-${product.id}` } />
            );
          })}
          <div className="order">
            <p>
              <span>Total</span>
            </p>
            <p>${sumTotal()}</p>
          </div>
          <button className="primary-button">Checkout</button>
        </div>
      </aside>
    </>
  );
};

export { MyOrder };
