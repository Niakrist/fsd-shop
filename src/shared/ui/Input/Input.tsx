import React from "react";
import styles from "./Input.module.css";
import cn from "classnames";
import type { IInputProps } from "./Input.props";

const Input = ({
  name,
  type,
  value,
  sizeInput,
  placeholder,
  onChange,
}: IInputProps): React.JSX.Element => {
  return (
    <input
      className={cn(styles.input, {
        [styles.bigInput]: sizeInput === "big",
        [styles.smallInput]: sizeInput === "small",
      })}
      value={value}
      onChange={onChange}
      name={name}
      id={name}
      type={type}
      placeholder={placeholder}
      autoComplete="off"
    />
  );
};

export default Input;
