import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useAppDispatch } from "@/app/store/store";
import {
  addOrChangeItemInCart,
  decrementIteminCart,
  incrementIteminCart,
  removeItemFromCart,
} from "../../model/cartSlice";

import Counter from "../Counter/Counter";

import { Icon, PriceInfo } from "@/shared/ui";
import type { IProductsInCart } from "@/shared/interface";
import styles from "./CartItem.module.css";

interface ICartItemProps {
  item: IProductsInCart;
}

const CartItem = ({ item }: ICartItemProps): React.JSX.Element => {
  const [count, setCount] = useState(item.quantity);
  const dispatch = useAppDispatch();

  const handleChangeCount = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    const regEx = /^(?!0)\d+$/;
    if (regEx.test(value)) {
      setCount(Number(value));
    }

    dispatch(
      addOrChangeItemInCart({ product: item.product, quantity: Number(value) })
    );
  };
  const handleDecrement = () => {
    if (count > 1) {
      setCount((prev) => prev - 1);
      dispatch(decrementIteminCart(item.product));
    }
  };
  const handleIncrement = () => {
    setCount((prev) => prev + 1);
    dispatch(incrementIteminCart(item.product));
  };

  const handleDelete = () => {
    dispatch(removeItemFromCart(item.product));
  };

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
        <Link className={styles.link} to={`/products/${item.product.slug}`}>
          {item.product.title}
        </Link>
        <div className={styles.priceWrapper}>
          <Counter
            count={count}
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
