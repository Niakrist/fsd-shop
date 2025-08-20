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
  borderInput,
  backgroundInput,
  colorPlaceholder,
  inputColor,
  onChange,
  className,
}: IInputProps): React.JSX.Element => {
  return (
    <input
      className={cn(
        styles.input,
        {
          [styles.bigInput]: sizeInput === "big",
          [styles.smallInput]: sizeInput === "small",
          [styles.borderGrey]: borderInput === "grey",
          [styles.borderWhite]: borderInput === "white",
          [styles.backgroundWhite]: backgroundInput === "white",
          [styles.backgroundTransparent]: backgroundInput === "transparent",
          [styles.placeholderGrey]: colorPlaceholder === "grey",
          [styles.placeholderWhite]: colorPlaceholder === "white",
          [styles.colorWhite]: inputColor === "white",
          [styles.colorBlack]: inputColor === "black",
        },
        className
      )}
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
