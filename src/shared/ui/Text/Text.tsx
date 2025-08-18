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
  size: "standart";
  fontWeight: "regular";
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
        [styles.textBlack]: color === "black",
        [styles.regular]: fontWeight === "regular",
      })}>
      {children}
    </p>
  );
};

export default Text;
