import { useGetProductBySlugQuery } from "@/entities/product/api/productsApi";
import { ProductSlider, ReadMore } from "@/features";
import { Button, Container, Htag, Text } from "@/shared/ui";
import { skipToken } from "@reduxjs/toolkit/query";
import React, { useState } from "react";
import { useParams } from "react-router-dom";
import styles from "./ProductItem.module.css";
import PriceInfo from "@/shared/ui/PriceInfo/PriceInfo";
import { Counter } from "@/entities";
import { useAppDispatch, useAppSelector } from "@/app/store/store";
import { change } from "@/entities/cart/model/cartSlice";

const ProductItem = (): React.JSX.Element => {
  const { slug } = useParams();
  const { data } = useGetProductBySlugQuery(slug ?? skipToken);

  const dispatch = useAppDispatch();

  if (!data) {
    return <div>Загрузка </div>;
  }

  const [count, setCount] = useState(1);
  const handleChangeCount = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    const regEx = /^(?!0)\d+$/;
    if (regEx.test(value)) {
      setCount(Number(value));
    }
  };

  const handleDecrement = () => {
    if (count > 1) {
      setCount((prev) => prev - 1);
    }
  };

  const handleIncrement = () => {
    setCount((prev) => prev + 1);
  };

  const addToCart = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    dispatch(change({ product: data, quantity: count }));
  };

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
              count={count}
              handleChangeCount={handleChangeCount}
              handleDecrement={handleDecrement}
              handleIncrement={handleIncrement}
            />
            <Button
              onClick={addToCart}
              bgColor="green"
              color="white"
              className={styles.button}>
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
