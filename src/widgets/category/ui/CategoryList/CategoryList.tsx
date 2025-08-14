import React from "react";
import { CategoryItem, useGetCategoriesQuery } from "@/entities";
import styles from "./CategoryList.module.css";
import type { ICategoryListProps } from "./CategoryList.props";

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
