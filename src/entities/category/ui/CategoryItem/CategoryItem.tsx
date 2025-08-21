import React from "react";
import { Link } from "react-router-dom";
import styles from "./CategoryItem.module.css";

import type { ICategoryItemProps } from "./CategoryItem.props";

const CategoryItem = ({ item }: ICategoryItemProps): React.JSX.Element => {
  const { image, name, slug } = item;

  return (
    <li className={styles.card}>
      <Link to={`/categories/${slug}`} className={styles.imgWrapper}>
        <img className={styles.img} src={image} alt={name} />
      </Link>
      <Link className={styles.link} to={`/categories/${slug}`}>
        {name}
      </Link>
    </li>
  );
};

export default CategoryItem;
