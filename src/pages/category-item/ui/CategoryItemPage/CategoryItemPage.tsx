import { Title } from "@/entities";
import { Container } from "@/shared/ui";
import { Contacts, ProductList } from "@/widgets";
import React from "react";
import { useParams } from "react-router-dom";
import styles from "./CategoryItemPage.module.css";
import { useGetAllProductsByCategoryQuery } from "@/entities/product/api/productsApi";
import { skipToken } from "@reduxjs/toolkit/query";
import { useGetCategoryBySlugQuery } from "@/entities/category/api/categoriesApi";

const CategoryItemPage = (): React.JSX.Element => {
  const { slug } = useParams();

  const { data: category } = useGetCategoryBySlugQuery(slug ?? skipToken);

  const { data: products } = useGetAllProductsByCategoryQuery(
    category?.id ?? skipToken
  );

  if (!category || !products) {
    return <div>Loading</div>;
  }

  return (
    <section className={styles.section}>
      <Container>
        <Title title={category.name} tag="h1" />
        <ProductList products={products || []} />
      </Container>
      <Contacts />
    </section>
  );
};

export default CategoryItemPage;
