import React from "react";
import styles from "./Order.module.scss";
import Image from "next/image";

const Order = () => {
  return (
    <div className={styles.order}>
      <p>
        <span>03.25.21</span>
        <span>6 articles</span>
      </p>
      <p>$560.00</p>
      <Image src="./icons/flechita.svg" alt="arrow" />
    </div>
  );
};

export { Order };
