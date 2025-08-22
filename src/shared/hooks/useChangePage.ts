import { useState } from "react";
import type { IProduct } from "../interface";

export const useChangePage = (products: IProduct[]) => {
  const [currentPage, setCurrentPage] = useState(0);

  const limit = 8;
  const offset = 8;

  const handleChange = (page: number) => {
    setCurrentPage(page);
  };

  const cropProducts = products?.length
    ? [...products].splice(currentPage * limit, offset)
    : [];

  const totalPages =
    (products && Math.ceil(products?.length / Number(limit))) || 0;

  return { handleChange, cropProducts, totalPages, currentPage };
};
