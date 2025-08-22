import React from "react";
import { useParams } from "react-router-dom";
import { skipToken } from "@reduxjs/toolkit/query";
import { Container } from "@/shared/ui";
import { Title } from "@/entities";
import { Contacts, ProductList } from "@/widgets";
import { useGetAllProductsByCategoryQuery } from "@/entities/product/api/productsApi";
import { useGetCategoryBySlugQuery } from "@/entities/category/api/categoriesApi";
import styles from "./CategoryItemPage.module.css";
import { Pagination } from "@/features";
import { useChangePage } from "@/shared/hooks";

const CategoryItemPage = (): React.JSX.Element => {
  const { slug } = useParams();
  const { data: category } = useGetCategoryBySlugQuery(slug ?? skipToken);

  const { data: products } = useGetAllProductsByCategoryQuery(
    category?.id ?? skipToken
  );

  const { cropProducts, handleChange, totalPages, currentPage } = useChangePage(
    products || []
  );

  if (!category || !products) {
    return <div>Loading</div>;
  }

  return (
    <section className={styles.section}>
      <Container>
        <Title title={category.name} tag="h1" />
        <ProductList products={cropProducts} />
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          handleChange={handleChange}
        />
      </Container>
      <Contacts />
    </section>
  );
};

export default CategoryItemPage;
