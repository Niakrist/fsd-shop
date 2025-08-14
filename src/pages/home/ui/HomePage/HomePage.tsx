import { BannerSlide, Title } from "@/entities";
import { Container, YandexMap } from "@/shared/ui";
import { CategoryList, Contacts, ProductList, Subscribe } from "@/widgets";
import styles from "./HomePage.module.css";
import React from "react";

const HomePage = (): React.JSX.Element => {
  return (
    <>
      <BannerSlide />
      <section className={styles.section}>
        <Container>
          <Title title="Categories" link="categories" />
          <CategoryList cropCount={4} />
        </Container>
      </section>
      <Subscribe />

      <section className={styles.section}>
        <Container>
          <Title title="Sale" link="sales" />
          <ProductList cropCount={4} />
        </Container>
      </section>

      <Contacts />
      <YandexMap />
    </>
  );
};

export default HomePage;
