import React from "react";

import styles from "./CartItem.module.css";
import type { IProductsInCart } from "../../model/product-cart-slice.interface";
import { Link } from "react-router-dom";
import Counter from "../Counter/Counter";
import PriceInfo from "@/shared/ui/PriceInfo/PriceInfo";
import { Icon } from "@/shared/ui";

interface ICartItemProps {
  item: IProductsInCart;
}

const CartItem = ({ item }: ICartItemProps) => {
  const handleChangeCount = () => {};
  const handleDecrement = () => {};
  const handleIncrement = () => {};

  const handleDelete = () => {};

  return (
    <li className={styles.item}>
      <div className={styles.imgWrapper}>
        <img
          className={styles.img}
          src={item.product.images[0]}
          alt={item.product.title}
        />
      </div>
      <div className={styles.productInfo}>
        <Link className={styles.link} to={`products/${item.product.slug}`}>
          {item.product.title}
        </Link>
        <div className={styles.priceWrapper}>
          <Counter
            count={item.quantity}
            handleChangeCount={handleChangeCount}
            handleDecrement={handleDecrement}
            handleIncrement={handleIncrement}
          />
          <PriceInfo price={item.product.price} isHow />
        </div>
      </div>
      <button className={styles.button} onClick={handleDelete}>
        <Icon name="iconCross" />
      </button>
    </li>
  );
};

export default CartItem;
