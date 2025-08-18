import styles from "./DropDown.module.css";
import { Icon } from "@/shared/ui";
import cn from "classnames";
import type { ICategory } from "@/entities";

interface IDropDownProps {
  items: ICategory[];
  value: string;
  handleClick: () => void;
  handleChangeCategory: (value: string) => void;
  isOpen: boolean;
  name: "category";
}

const DropDown = ({
  items,
  value,
  handleClick,
  handleChangeCategory,
  isOpen,
  name,
}: IDropDownProps) => {
  return (
    <div className={styles.dropDown}>
      <button
        className={cn(styles.button, { [styles.active]: isOpen })}
        onClick={handleClick}>
        {value || name}
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
                name={name}
                checked={value === item.name}
                onChange={() => handleChangeCategory(item.slug)}
              />
              <label
                className={cn(styles.label, {
                  [styles.activeLabel]: value === item.name,
                })}
                htmlFor={item.id + item.name}>
                <span
                  className={cn(styles.round, {
                    [styles.activeRadio]: value === item.name,
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
