import React, { useState, useContext } from "react";
import styles from "./Header.module.scss";
import { AppContext } from "../../context/AppContext";

import { MyOrder } from "../../containers/MyOrder";
import { Menu } from "../Menu";
// file images
import iconMenu from "../../assets/icons/icon_menu.svg";
import logo from "../../assets/logos/logo_yard_sale.svg";
import shoppingCart from "../../assets/icons/icon_shopping_cart.svg";

const Header = () => {
  const [toggle, setToggle] = useState(false);
  const [toggleOrders, setToggleOrders] = useState(false);
  const { state } = useContext(AppContext);

  const handleToggle = () => {
    setToggle(!toggle);
  };

  return (
    <nav className={styles.Nav}>
      <img src={iconMenu} alt="menu" className={styles["nav-menu"]} />
      <div className={styles["navbar-left"]}>
        <img src={logo} alt="logo" className={styles["nav-logo"]} />
        <ul>
          <li>
            <a href="/">All</a>{" "}
          </li>
          <li>
            <a href="/">Clothes</a>{" "}
          </li>
          <li>
            <a href="/">Electronics</a>{" "}
          </li>
          <li>
            <a href="/">Furnitures</a>{" "}
          </li>
          <li>
            <a href="/">Toys</a>{" "}
          </li>
          <li>
            <a href="/">Others</a>{" "}
          </li>
        </ul>
      </div>
      <div className={styles["navbar-right"]}>
        <ul>
          <li
            className={`${styles["navbar-email"]} ${styles.pointer}`}
            onClick={handleToggle}
          >
            platzi@example.com
          </li>
          <li
            className={styles["navbar-shopping-cart"]}
            onClick={() => setToggleOrders(!toggleOrders)}
          >
            <img src={shoppingCart} alt="shopping cart" />
            {state.cart.length > 0 ? <div>{state.cart.length}</div> : null}
          </li>
        </ul>
      </div>
      {!!toggle && <Menu />}
      {!!toggleOrders && <MyOrder />}
    </nav>
  );
};

export { Header };
