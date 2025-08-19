import React from "react";
import styles from "./Counter.module.css";
import cn from "classnames";
import { Icon } from "@/shared/ui";

interface ICounterProps {
  count: number;
  handleChangeCount: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleDecrement: () => void;
  handleIncrement: () => void;
}

const Counter = ({
  handleChangeCount,
  handleDecrement,
  handleIncrement,
  count,
}: ICounterProps): React.JSX.Element => {
  return (
    <div className={styles.counter}>
      <button
        onClick={handleDecrement}
        className={cn(styles.buttont, styles.left)}>
        <Icon name="iconMinus" />
      </button>
      <input
        onChange={handleChangeCount}
        value={count}
        className={styles.input}
        type="string"
      />
      <button
        onClick={handleIncrement}
        className={cn(styles.buttont, styles.right)}>
        <Icon name="iconPlus" />
      </button>
    </div>
  );
};

export default Counter;
