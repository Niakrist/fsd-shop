import { useState } from "react";
import styles from "./DropDown.module.css";
import { Icon } from "@/shared/ui";
import cn from "classnames";
import type { ICategory } from "@/entities";

interface IDropDownProps {
  items: ICategory[];
  value: ICategory;
  setValue: (value: ICategory) => void;
}

const DropDown = ({ items, value, setValue }: IDropDownProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen((prev) => !prev);
  };

  const handleChange = (value: ICategory) => {
    setValue(value);
    setIsOpen((prev) => !prev);
  };
  //categorySlug
  return (
    <div className={styles.dropDown}>
      <button
        className={cn(styles.button, { [styles.active]: isOpen })}
        onClick={handleClick}>
        {value?.name || "Category "}
        <Icon
          name="iconChevron"
          className={cn(styles.icon, { [styles.active]: isOpen })}
        />
      </button>
      {isOpen && (
        <ul className={styles.list}>
          {items.map((item) => (
            <li key={item.name} className={styles.item}>
              <input
                className={styles.input}
                id={item.id + item.name}
                type="radio"
                value={item.name}
                name="category"
                checked={value?.image === item.name}
                onChange={() => handleChange(item)}
              />
              <label
                className={cn(styles.label, {
                  [styles.activeLabel]: value?.name === item.name,
                })}
                htmlFor={item.id + item.name}>
                <span
                  className={cn(styles.round, {
                    [styles.activeRadio]: value?.name === item.name,
                  })}
                />
                {item.name}
              </label>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default DropDown;
