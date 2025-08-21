import React from "react";
import { Container } from "@/shared/ui";
import { Title } from "@/entities";
import { CategoryList, Contacts } from "@/widgets";
import styles from "./CategoriesPage.module.css";

const CategoriesPage = (): React.JSX.Element => {
  return (
    <section className={styles.section}>
      <Container>
        <Title title="Categories" tag="h1" />
        <CategoryList />
      </Container>
      <Contacts />
    </section>
  );
};

export default CategoriesPage;
