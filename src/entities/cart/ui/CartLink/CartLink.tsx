import React from "react";
import { Link } from "react-router-dom";
import { useAppSelector } from "@/app/store/store";
import { Icon } from "@/shared/ui";
import styles from "./CartLink.module.css";

const CartLink = (): React.JSX.Element => {
  const cart = useAppSelector((state) => state.cart);

  return (
    <Link className={styles.link} to="cart">
      {!!cart?.length && <span className={styles.quantity}>{cart.length}</span>}
      <Icon name="iconCart" className={styles.iconCart} />
    </Link>
  );
};

export default CartLink;
