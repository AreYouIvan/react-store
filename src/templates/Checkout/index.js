import React from 'react';
import { Header } from '../../components/Header'
import { OrderItem } from '../../components/OrderItem'
import { Order } from '../../components/Order'

const Checkout = () => {
  return (
    <>
      <Header />
      <h1>My order</h1>
      <Order />
      <OrderItem />
    </>
  );
}

export { Checkout };