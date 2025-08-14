import { Container } from "@/shared/ui";
import React from "react";
import styles from "./ProductsPage.module.css";
import { Title } from "@/entities";
import { ProductList } from "@/widgets";
import { ProductsFilter } from "@/features";

const ProductsPage = (): React.JSX.Element => {
  return (
    <section className={styles.section}>
      <Container>
        <Title title="Tools and equipment" />
        <ProductsFilter />
        <ProductList />
      </Container>
    </section>
  );
};

export default ProductsPage;
