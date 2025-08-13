import React from "react";
import styles from "./Container.module.css";
import type { IContainerProps } from "./Container.props";
import cn from "classnames";

const Container = ({
  children,
  className,
  ...props
}: IContainerProps): React.JSX.Element => {
  return (
    <div {...props} className={cn(styles.container, className)}>
      {children}
    </div>
  );
};

export default Container;
