import React from "react";
import type { IHtagProps } from "./Htag.props";
import cn from "classnames";

import styles from "./Htag.module.css";

const Htag = ({
  tag,
  size,
  color,
  children,
  className,
  ...props
}: IHtagProps): React.JSX.Element => {
  const Tag = tag as keyof React.JSX.IntrinsicElements;

  return React.createElement(
    Tag,
    {
      ...props,
      className: cn(className, {
        [styles.large]: size === "large",
        [styles.medium]: size === "medium",
        [styles.whiteText]: color === "white",
        [styles.blackText]: color === "black",
      }),
    },
    children
  );
};

export default Htag;
