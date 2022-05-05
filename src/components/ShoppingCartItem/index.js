import React from "react";
import styles from "./ShoppingCartItem.scss";
import Image from "next/image";

const ShoppingCartItem = () => {
  return (
    <section className={styles["product-detail"]}>
      <div className={styles["title-container"]}>
        <Image src="./icons/flechita.svg" alt="arrow" />
        <p className={styles.title}>My order</p>
      </div>

      <div className={styles["my-order-content"]}>
        <div className={styles["shopping-cart"]}>
          <figure>
            <Image
              src="https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
              alt="bike"
            />
          </figure>
          <p>Bike</p>
          <p>$30,00</p>
          <Image src="./icons/icon_close.png" alt="close" />
        </div>

        <div className={styles["shopping-cart"]}>
          <figure>
            <Image
              src="https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
              alt="bike"
            />
          </figure>
          <p>Bike</p>
          <p>$30,00</p>
          <Image src="./icons/icon_close.png" alt="close" />
        </div>

        <div className={styles["shopping-cart"]}>
          <figure>
            <Image
              src="https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
              alt="bike"
            />
          </figure>
          <p>Bike</p>
          <p>$30,00</p>
          <Image src="./icons/icon_close.png" alt="close" />
        </div>

        <div className={styles.order}>
          <p>
            <span>Total</span>
          </p>
          <p>$560.00</p>
        </div>

        <button className={styles["primary-button"]}>Checkout</button>
      </div>
    </section>
  );
};

export { ShoppingCartItem };
