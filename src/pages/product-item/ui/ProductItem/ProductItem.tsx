import { useGetProductBySlugQuery } from "@/entities/product/api/productsApi";
import { ProductSlider, ReadMore } from "@/features";
import { Button, Container, Htag, Text } from "@/shared/ui";
import { skipToken } from "@reduxjs/toolkit/query";
import React from "react";
import { useParams } from "react-router-dom";

import styles from "./ProductItem.module.css";
import PriceInfo from "@/shared/ui/PriceInfo/PriceInfo";
import { Counter, type IProduct } from "@/entities";
import { useAppDispatch } from "@/app/store/store";
import { decrement, increment } from "@/entities/cart/model/cartSlice";

const ProductItem = (): React.JSX.Element => {
  const { slug } = useParams();
  const { data } = useGetProductBySlugQuery(slug ?? skipToken);

  const dispatch = useAppDispatch();

  const handleIncrement = (product: IProduct, quantity: number) => {
    dispatch(increment({ product, quantity }));
  };
  const handleDecrement = (product: IProduct, quantity: number) => {
    dispatch(decrement({ product, quantity }));
  };

  if (!data) {
    return <div>Загрузка </div>;
  }

  console.log("data: ", data);

  return (
    <section className={styles.section}>
      <Container className={styles.productItem}>
        <ProductSlider images={data?.images} />
        <div className={styles.content}>
          <Htag size="small" color="black" tag="h1">
            {data.title}
          </Htag>
          <PriceInfo price={data.price} isHow />
          <div className={styles.wrapperPrice}>
            <Counter
              handleIncrement={handleIncrement}
              handleDecrement={handleDecrement}
              product={data}
            />
            <Button bgColor="green" color="white" className={styles.button}>
              Add to cart
            </Button>
          </div>
          <Htag size="werySmall" color="black" tag="h2">
            Description
          </Htag>

          <ReadMore>
            <Text color="black" fontWeight="regular" size="standart">
              {data.description}
            </Text>
            <Text color="black" fontWeight="regular" size="standart">
              {data.description}
            </Text>
            <Text color="black" fontWeight="regular" size="standart">
              {data.description}
            </Text>
          </ReadMore>
        </div>
      </Container>
    </section>
  );
};

export default ProductItem;
