import React, { useState } from "react";
import cn from "classnames";
import { useGetProductsQuery } from "@/entities/product/api/productsApi";

import styles from "./Pagination.module.css";
import { useFilter } from "../../hooks";

const Pagination = (): React.JSX.Element => {
  const { data: products } = useGetProductsQuery("");
  const { limit, offset, handleChangePage } = useFilter();
  const [currentPage, setCurrentPage] = useState(offset);
  const totalPages =
    products?.length && Math.ceil(products?.length / Number(limit));

  const pages = Array.from(
    { length: totalPages as number },
    (_, index) => index
  );

  const handleChange = (page: number) => {
    handleChangePage(String(page * Number(limit)));
    setCurrentPage(String(page));
  };

  return (
    <ul className={styles.pagination}>
      {pages.map((page) => (
        <li key={page}>
          <button
            onClick={() => handleChange(page)}
            className={cn(styles.button, {
              [styles.pagintionActive]: String(page) === currentPage,
            })}>
            {page + 1}
          </button>
        </li>
      ))}
    </ul>
  );
};

export default Pagination;
