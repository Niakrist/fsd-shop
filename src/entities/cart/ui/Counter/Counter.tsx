import React, { useEffect } from "react";
import styles from "./Counter.module.css";
import cn from "classnames";
import { Icon } from "@/shared/ui";
import type { IProduct } from "@/entities/product";
import { useAppSelector } from "@/app/store/store";

interface ICounterProps {
  handleIncrement: (params: { product: IProduct; quantity: number }) => void;
  handleDecrement: (params: { product: IProduct; quantity: number }) => void;
  product: IProduct;
}

const Counter = ({
  product,
  handleIncrement,
  handleDecrement,
}: ICounterProps): React.JSX.Element => {
  useEffect(() => {
    console.log("product: ", product);
  }, [handleIncrement, handleDecrement]);

  return (
    <div className={styles.counter}>
      <button
        onClick={() => handleDecrement({ product: product, quantity: 1 })}
        className={cn(styles.buttont, styles.left)}>
        <Icon name="iconMinus" />
      </button>
      <input value={1} className={styles.input} type="string" />
      <button
        onClick={() => handleIncrement({ product: product, quantity: 1 })}
        className={cn(styles.buttont, styles.right)}>
        <Icon name="iconPlus" />
      </button>
    </div>
  );
};

export default Counter;
