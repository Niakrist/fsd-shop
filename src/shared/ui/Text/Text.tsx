import React from "react";
import styles from "./Text.module.css";
import cn from "classnames";

export interface ITextProps
  extends React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLParagraphElement>,
    HTMLParagraphElement
  > {
  children: React.ReactNode;
  color: "black";
  size: "standart" | "big";
  fontWeight: "regular" | "bold";
}

const Text = ({
  color,
  size,
  fontWeight,
  children,
}: ITextProps): React.JSX.Element => {
  return (
    <p
      className={cn(styles.text, {
        [styles.standart]: size === "standart",
        [styles.bigText]: size === "big",
        [styles.textBlack]: color === "black",
        [styles.regular]: fontWeight === "regular",
        [styles.boldText]: fontWeight === "bold",
      })}>
      {children}
    </p>
  );
};

export default Text;
