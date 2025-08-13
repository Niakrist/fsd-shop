import React from "react";
import { Container, Htag, Label } from "@/shared/ui";
import { CategoryItem, useGetCategoriesQuery } from "@/entities";
import styles from "./CategoryList.module.css";

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
          <Label link="categories">All categories</Label>
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
