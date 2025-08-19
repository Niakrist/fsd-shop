import React from "react";
import { Link } from "react-router-dom";
import styles from "./CartLink.module.css";
import { Icon } from "@/shared/ui";
import { useAppSelector } from "@/app/store/store";
const CartLink = (): React.JSX.Element => {
  const cart = useAppSelector((state) => state.cart);

  console.log("cart: ", cart);

  return (
    <Link className={styles.link} to="cart">
      {!!cart?.length && <span className={styles.quantity}>{cart.length}</span>}
      <Icon name="iconCart" className={styles.iconCart} />
    </Link>
  );
};

export default CartLink;
