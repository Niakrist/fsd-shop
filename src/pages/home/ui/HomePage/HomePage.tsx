import { BannerSlide, Title } from "@/entities";
import { Container, YandexMap } from "@/shared/ui";
import { CategoryList, Contacts, ProductList, Subscribe } from "@/widgets";
import styles from "./HomePage.module.css";
import React from "react";

import { useGetProductsQuery } from "@/entities/product/api/productsApi";

const HomePage = (): React.JSX.Element => {
  const { data: products } = useGetProductsQuery("");

  return (
    <>
      <BannerSlide />
      <section className={styles.section}>
        <Container>
          <Title title="Categories" tag="h2" link="categories" />
          <CategoryList cropCount={4} />
        </Container>
      </section>
      <Subscribe />

      <section className={styles.section}>
        <Container>
          <Title title="Sale" tag="h2" link="products" />
          <ProductList products={products || []} cropCount={4} />
        </Container>
      </section>

      <Contacts />
      <YandexMap />
    </>
  );
};

export default HomePage;
