import React from 'react';
import { Header } from '../../components/Header'
import { Order } from "../../components/Order";
import { MyOrder } from "../../containers/MyOrder";

const Orders = () => {
  return (
    <>
      <Header />
      <h1>My orders</h1>
      <Order onClick={() => <MyOrder />}/>
      <Order />
      <Order />

    </>
  );
}

export { Orders };