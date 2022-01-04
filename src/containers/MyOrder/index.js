import React from 'react';

import { Header } from '../../components/Header'
import { Order } from "../../components/Order"
import { OrderItem } from "../../components/OrderItem"

const MyOrder = () => {
  return (
    <>
      <Header />
      <Order />
      <OrderItem/>
      <OrderItem/>
      <OrderItem/>

    </>
  );
}

export { MyOrder };