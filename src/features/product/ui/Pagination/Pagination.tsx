import React, { useEffect } from "react";
import cn from "classnames";
import styles from "./Pagination.module.css";
import { useLocation } from "react-router-dom";

interface IPaginationProps {
  currentPage: number;
  totalPages: number;
  handleChange: (page: number) => void;
}

const Pagination = ({
  currentPage,
  totalPages,
  handleChange,
}: IPaginationProps): React.JSX.Element => {
  const location = useLocation();

  useEffect(() => {
    handleChange(0);
  }, [location]);

  const pages = Array.from(
    { length: totalPages as number },
    (_, index) => index
  );

  return (
    <ul className={styles.pagination}>
      {pages.map((page) => (
        <li key={page}>
          <button
            onClick={() => handleChange(page)}
            className={cn(styles.button, {
              [styles.pagintionActive]: page === currentPage,
            })}>
            {page + 1}
          </button>
        </li>
      ))}
    </ul>
  );
};

export default Pagination;
