import React from "react";
import Icon from "../Icon/Icon";
import styles from "./Counter.module.css";
import cn from "classnames";

const Counter = (): React.JSX.Element => {
  return (
    <div className={styles.counter}>
      <button className={cn(styles.buttont, styles.left)}>
        <Icon name="iconMinus" />
      </button>
      <input className={styles.input} type="string" />
      <button className={cn(styles.buttont, styles.right)}>
        <Icon name="iconPlus" />
      </button>
    </div>
  );
};

export default Counter;
