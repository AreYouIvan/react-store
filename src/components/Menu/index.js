import React from "react";
import Link from "next/link";
import styles from "./Menu.module.scss";
const Menu = () => {
  return (
    <div className={styles["desktop-menu"]}>
      <ul>
        <li>
          <Link href="/">My orders</Link>
        </li>

        <li>
          <Link href="/">My account</Link>
        </li>

        <li>
          <Link href="/">Sign out</Link>
        </li>
      </ul>
    </div>
  );
};

export { Menu };
