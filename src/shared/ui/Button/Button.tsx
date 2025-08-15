import React from "react";
import cn from "classnames";
import styles from "./Button.module.css";
import type { IButtonProps } from "./Button.props";

const Button = ({
  children,
  className,
  color,
  bgColor,
  border,
  ...props
}: IButtonProps): React.JSX.Element => {
  return (
    <button
      {...props}
      className={cn(styles.button, className, {
        [styles.whiteText]: color === "white",
        [styles.blackText]: color === "black",
        [styles.greenText]: color === "green",
        [styles.whiteBgColor]: bgColor === "white",
        [styles.blackBgColor]: bgColor === "black",
        [styles.greenBgColor]: bgColor === "green",
        [styles.whiteBorder]: border === "white",
        [styles.blackBorder]: border === "black",
        [styles.greyBorder]: border === "grey",
      })}>
      {children}
    </button>
  );
};

export default Button;
