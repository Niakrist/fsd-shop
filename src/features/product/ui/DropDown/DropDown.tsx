import React, { useState } from "react";
import styles from "./DropDown.module.css";
import { Icon } from "@/shared/ui";
import cn from "classnames";

const DropDown = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <div className={styles.dropDown}>
      <button
        className={cn(styles.button, { [styles.active]: isOpen })}
        onClick={handleClick}>
        Category{" "}
        <Icon
          name="iconChevron"
          className={cn(styles.icon, { [styles.active]: isOpen })}
        />
      </button>
      {isOpen && (
        <ul className={styles.list}>
          <li className={styles.item}>
            <input
              className={styles.input}
              id="item-1"
              type="radio"
              value="item 1"
              name="category"
            />
            <label className={styles.label} htmlFor="item-1">
              <span className={styles.round} />
              item-1
            </label>
          </li>
          <li className={styles.item}>
            <input id="item-2" type="radio" value="item 2" name="category" />
            <label htmlFor="item-2">item-2</label>
          </li>
          <li className={styles.item}>
            <input id="item-3" type="radio" value="item 3" name="category" />
            <label htmlFor="item-3">item-3</label>
          </li>
          <li className={styles.item}>
            <input id="item-4" type="radio" value="item 4" name="category" />
            <label htmlFor="item-4">item-4</label>
          </li>
        </ul>
      )}
    </div>
  );
};

export default DropDown;
