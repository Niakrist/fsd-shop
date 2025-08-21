import React from "react";
import { Link } from "react-router-dom";
import { Badge, Button, PriceInfo } from "@/shared/ui";
import type { IProduct } from "@/shared/interface";
import styles from "./ProductItem.module.css";

interface IProductItemProps {
  item: IProduct;
  handeAddToCart: (product: IProduct, quantity: number) => void;
}

const ProductItem = ({
  item,
  handeAddToCart,
}: IProductItemProps): React.JSX.Element => {
  const { title, slug, price, images } = item;

  return (
    <li className={styles.item}>
      <Button
        onClick={() => handeAddToCart(item, 1)}
        className={styles.button}
        bgColor="green"
        color="white">
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
