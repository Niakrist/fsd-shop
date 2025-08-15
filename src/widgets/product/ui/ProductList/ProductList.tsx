import React from "react";
import styles from "./ProductList.module.css";
import { ProductItem } from "@/entities";
import type { IProductListProps } from "./ProductList.props";

const ProductList = ({
  products,
  cropCount,
}: IProductListProps): React.JSX.Element => {
  const cropData =
    products && cropCount && products.length > cropCount
      ? products.slice(0, cropCount)
      : products;

  return (
    <ul className={styles.list}>
      {cropData &&
        cropData.map((item) => <ProductItem key={item.id} item={item} />)}
    </ul>
  );
};

export default ProductList;
