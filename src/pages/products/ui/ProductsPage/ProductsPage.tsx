import React from "react";
import { useSearchParams } from "react-router-dom";
import { Container } from "@/shared/ui";
import { Title } from "@/entities";
import { ProductList, ProductsFilter } from "@/widgets";
import { useGetProductsQuery } from "@/entities/product/api/productsApi";
import { useGetCategoriesQuery } from "@/entities/category/api/categoriesApi";
import styles from "./ProductsPage.module.css";
import { Pagination } from "@/features";

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
        <Title tag="h1" title="Tools and equipment" />
        <ProductsFilter categories={categories || []} />
        <ProductList products={products || []} />
        <Pagination />
      </Container>
    </section>
  );
};

export default ProductsPage;
