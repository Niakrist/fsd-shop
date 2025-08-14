import React from "react";
import styles from "./ProductList.module.css";
import { ProductItem, useGetProductsQuery } from "@/entities";
import type { IProductListProps } from "./ProductList.props";
import { useSearchParams } from "react-router-dom";

const ProductList = ({ cropCount }: IProductListProps): React.JSX.Element => {
  const [searchParams] = useSearchParams();

  const params = searchParams.toString();
  const { data: products } = useGetProductsQuery(params, {
    refetchOnMountOrArgChange: true,
  });

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
