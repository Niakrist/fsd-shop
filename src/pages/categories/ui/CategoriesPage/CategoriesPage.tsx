import { Container } from "@/shared/ui";
import React from "react";
import styles from "./CategoriesPage.module.css";
import { CategoryList, Contacts } from "@/widgets";
import { Title } from "@/entities";
const CategoriesPage = (): React.JSX.Element => {
  return (
    <section className={styles.section}>
      <Container>
        <Title title="Categories" />
        <CategoryList />
      </Container>
      <Contacts />
    </section>
  );
};

export default CategoriesPage;
