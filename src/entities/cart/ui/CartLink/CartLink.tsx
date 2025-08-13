import React from "react";
import { Link } from "react-router-dom";
import styles from "./CartLink.module.css";
import { Icon } from "@/shared/ui";
const CartLink = (): React.JSX.Element => {
  return (
    <Link className={styles.link} to="cart">
      <span className={styles.quantity}>12</span>
      <Icon name="iconCart" className={styles.iconCart} />
    </Link>
  );
};

export default CartLink;
