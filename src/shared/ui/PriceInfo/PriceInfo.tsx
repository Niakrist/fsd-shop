import React, { useMemo } from "react";
import styles from "./PriceInfo.module.css";
import { formatPrice } from "@/shared/utils";
import Badge from "../Badge/Badge";

interface IPriceInfoProps {
  price: number;
  isHow?: boolean;
}

const PriceInfo = ({ price, isHow }: IPriceInfoProps): React.JSX.Element => {
  const discount = useMemo(() => Math.random(), []);

  return (
    <div className={styles.wrapperPrice}>
      <p className={styles.price}>{formatPrice(price, "USD")}</p>
      {discount > 0.5 && (
        <>
          <p className={styles.oldPrice}>{formatPrice(price * 1.2, "USD")}</p>
          {isHow && (
            <Badge className={styles.discount} color="white" bgColor="green">
              20%
            </Badge>
          )}
        </>
      )}
    </div>
  );
};

export default PriceInfo;
