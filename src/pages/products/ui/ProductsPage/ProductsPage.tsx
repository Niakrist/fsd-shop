import { Container } from "@/shared/ui";
import React from "react";
import styles from "./ProductsPage.module.css";
import { Title } from "@/entities";
import { ProductList, ProductsFilter } from "@/widgets";

import { useSearchParams } from "react-router-dom";
import { useGetProductsQuery } from "@/entities/product/api/productsApi";
import { useGetCategoriesQuery } from "@/entities/category/api/categoriesApi";

const ProductsPage = (): React.JSX.Element => {
  const [searchParams] = useSearchParams();

  const params = searchParams.toString();

  const { data: products } = useGetProductsQuery(params, {
    refetchOnMountOrArgChange: true,
  });

  const { data: categories } = useGetCategoriesQuery(null);

  return (
    <section className={styles.section}>
      <Container>
        <Title title="Tools and equipment" />
        <ProductsFilter categories={categories || []} />
        <ProductList products={products || []} />
      </Container>
    </section>
  );
};

export default ProductsPage;
