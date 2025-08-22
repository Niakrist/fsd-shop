import React from "react";
import { useSearchParams } from "react-router-dom";
import { Container } from "@/shared/ui";
import { Title } from "@/entities";
import { ProductList, ProductsFilter } from "@/widgets";
import { useGetProductsQuery } from "@/entities/product/api/productsApi";
import { useGetCategoriesQuery } from "@/entities/category/api/categoriesApi";
import styles from "./ProductsPage.module.css";
import { Pagination } from "@/features";
import { useChangePage } from "@/shared/hooks";

const ProductsPage = (): React.JSX.Element => {
  const [searchParams] = useSearchParams();
  const params = searchParams.toString();

  const { data: products, isLoading: productsLoading } = useGetProductsQuery(
    params,
    {
      refetchOnMountOrArgChange: true,
    }
  );

  const { data: categories, isLoading: categoriesLoading } =
    useGetCategoriesQuery(null);

  const { cropProducts, handleChange, totalPages, currentPage } = useChangePage(
    products || []
  );

  if (productsLoading || categoriesLoading) {
    return <div>Loading...</div>;
  }

  return (
    <section className={styles.section}>
      <Container>
        <Title tag="h1" title="Tools and equipment" />
        <ProductsFilter categories={categories || []} />
        <ProductList products={cropProducts || []} />
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          handleChange={handleChange}
        />
      </Container>
    </section>
  );
};

export default ProductsPage;
