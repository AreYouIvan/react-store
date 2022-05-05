import React from "react";
import styles from "./ProductInfo.scss";
import Image from "next/image";
const ProductInfo = () => {
  return (
    <aside className={styles["product-detail"]}>
      <div className={styles["product-detail-close"]}>
        <Image src="./icons/icon_close.png" alt="close" />
      </div>
      <Image
        src="https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
        alt="bike"
      />
      <div className={styles["product-info"]}>
        <p>$35,00</p>
        <p>Bike</p>
        <p>
          With its practical position, this bike also fulfills a decorative
          function, add your hall or workspace.
        </p>
        <button className={styles["primary-button add-to-cart-button"]}>
          <Image src="./icons/bt_add_to_cart.svg" alt="add to cart" />
          Add to cart
        </button>
      </div>
    </aside>
  );
};

export { ProductInfo };
