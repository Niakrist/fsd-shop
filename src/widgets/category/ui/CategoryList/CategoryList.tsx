import React from "react";

import styles from "./CategoryList.module.css";
import { Container, Htag, Label } from "@/shared/ui";
import { CategoryItem } from "@/entities";
import { useGetCategoriesQuery } from "@/entities/category/api/categoriesApi";

const CategoryList = (): React.JSX.Element => {
  const { data } = useGetCategoriesQuery(null);

  const cropData = data && data.length > 4 ? data.slice(0, 4) : data;

  return (
    <section className={styles.section}>
      <Container>
        <div className={styles.title}>
          <Htag color="black" tag="h2" size="medium">
            Categories
          </Htag>
          <Label link="all-categories">All categories</Label>
        </div>
        <ul className={styles.list}>
          {cropData &&
            cropData.map((item) => <CategoryItem key={item.id} item={item} />)}
        </ul>
      </Container>
    </section>
  );
};

export default CategoryList;
