import React from "react";
import styles from "./Label.module.css";
import type { ILabelProps } from "./Label.props";
import { Link } from "react-router-dom";

const Label = ({
  children,
  link,
  ...props
}: ILabelProps): React.JSX.Element => {
  return (
    <div className={styles.label} {...props}>
      <span className={styles.line} />
      <Link to={link} className={styles.span}>
        {children}
      </Link>
    </div>
  );
};

export default Label;
