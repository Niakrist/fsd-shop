import React from "react";
import { ProductItem } from "@/entities";
import { useAppDispatch } from "@/app/store/store";
import { addOrChangeItemInCart } from "@/entities/cart/model/cartSlice";
import type { IProduct } from "@/shared/interface";
import type { IProductListProps } from "./ProductList.props";
import styles from "./ProductList.module.css";
import { useFilter } from "@/features";

const ProductList = ({ products }: IProductListProps): React.JSX.Element => {
  const dispatch = useAppDispatch();
  const { limit } = useFilter();
  const handeAddToCart = (product: IProduct, quantity: number = 1) => {
    dispatch(addOrChangeItemInCart({ product, quantity }));
  };

  const cropData =
    products && limit && products.length > Number(limit)
      ? products.slice(0, Number(limit))
      : products;

  return (
    <ul className={styles.list}>
      {cropData &&
        cropData.map((item) => (
          <ProductItem
            handeAddToCart={handeAddToCart}
            key={item.id}
            item={item}
          />
        ))}
    </ul>
  );
};

export default ProductList;
