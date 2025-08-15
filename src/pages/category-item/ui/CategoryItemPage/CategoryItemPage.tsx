import { Title, useGetCategoryBySlugQuery } from "@/entities";
import { Container } from "@/shared/ui";
import { CategoryList, Contacts } from "@/widgets";
import React from "react";
import { useParams } from "react-router-dom";
import styles from "./CategoryItemPage.module.css";

const CategoryItemPage = (): React.JSX.Element => {
  const { slug } = useParams();

  const { data, isLoading } = useGetCategoryBySlugQuery(slug);

  if (isLoading || !data) {
    return <div>Loading</div>;
  }

  return (
    <section className={styles.section}>
      <Container>
        <Title title={data.name} />
        <CategoryList />
      </Container>
      <Contacts />
    </section>
  );
};

export default CategoryItemPage;
