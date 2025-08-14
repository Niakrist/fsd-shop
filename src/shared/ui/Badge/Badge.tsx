import React from "react";

import styles from "./Badge.module.css";
import type { IBadgeProps } from "./Badge.props";
import cn from "classnames";

const Badge = ({
  children,
  bgColor,
  color,
  className,
  ...props
}: IBadgeProps): React.JSX.Element => {
  return (
    <span
      {...props}
      className={cn(styles.badge, className, {
        [styles.whiteText]: color === "white",
        [styles.bgGreen]: bgColor === "green",
      })}>
      {children}
    </span>
  );
};

export default Badge;
