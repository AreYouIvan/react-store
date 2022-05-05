import React from "react";
import { OrderItem } from "../components/OrderItem";
import Head from "next/head";
function Checkout() {
  return (
    <>
      <Head>
        <title>
          Checkout
        </title>
      </Head>
      <div>
        <div>
          <h1>My order</h1>
          <div>
            <div>
              <p>
                <span>03.25.21</span>
                <span>6 articles</span>
              </p>
              <p>$560.00</p>
            </div>
          </div>
          <OrderItem />
        </div>
      </div>
    </>
  );
}

export default Checkout;
