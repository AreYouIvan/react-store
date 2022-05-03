import React from "react";
import styles from "./Menu.module.scss";
const Menu = () => {
  return (
    <div className={styles['desktop-menu']}>
      <ul>
        <li>
          <a href="/">
            My orders
          </a>
        </li>

        <li>
          <a href="/">My account</a>
        </li>

        <li>
          <a href="/">Sign out</a>
        </li>
      </ul>
    </div>
  );
};

export { Menu };
