import React from "react";
import styles from "./WrapperAddress.module.css";
import type { IWrapperAddressProps } from "./WrapperAddress.props";

const WrapperAddress = ({
  title,
  children,
  ...props
}: IWrapperAddressProps): React.JSX.Element => {
  return (
    <address className={styles.address} {...props}>
      <p className={styles.title}>{title}</p>
      {children}
    </address>
  );
};

export default WrapperAddress;
