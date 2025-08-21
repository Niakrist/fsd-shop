import React from "react";
import { CategoryItem } from "@/entities";
import type { ICategoryListProps } from "./CategoryList.props";
import { useGetCategoriesQuery } from "@/entities/category/api/categoriesApi";
import styles from "./CategoryList.module.css";

const CategoryList = ({ cropCount }: ICategoryListProps): React.JSX.Element => {
  const { data } = useGetCategoriesQuery(null);

  const cropData =
    cropCount && data && data.length > cropCount
      ? data.slice(0, cropCount)
      : data;

  return (
    <ul className={styles.list}>
      {cropData &&
        cropData.map((item) => <CategoryItem key={item.id} item={item} />)}
    </ul>
  );
};

export default CategoryList;
