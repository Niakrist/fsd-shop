import React from "react";
import styles from "./ProductItem.module.css";

import type { IProduct } from "@/entities";
import { Badge, Button } from "@/shared/ui";
import { Link } from "react-router-dom";

import PriceInfo from "@/shared/ui/PriceInfo/PriceInfo";
interface IProductItemProps
  extends React.DetailedHTMLProps<
    React.LiHTMLAttributes<HTMLLIElement>,
    HTMLLIElement
  > {
  item: IProduct;
}

const ProductItem = ({ item }: IProductItemProps) => {
  const { title, slug, price, images, description } = item;
  return (
    <li className={styles.item}>
      <Button className={styles.button} bgColor="green" color="white">
        Add to cart
      </Button>
      <Badge className={styles.bage} color="white" bgColor="green">
        20%
      </Badge>

      <div className={styles.imgWrapper}>
        <img className={styles.img} src={images[0]} alt={title} />
      </div>
      <div className={styles.productInfo}>
        <Link className={styles.link} to={`/products/${slug}`}>
          {title}
        </Link>
        <PriceInfo price={price} />
      </div>
    </li>
  );
};

export default ProductItem;
