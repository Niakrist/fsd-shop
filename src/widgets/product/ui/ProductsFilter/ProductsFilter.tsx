import React from "react";
import { Button, Input, Text, DropDown } from "@/shared/ui";
import { useFilter } from "@/features";
import type { ICategory } from "@/shared/interface";
import styles from "./ProductsFilter.module.css";

interface IProductsFilterProps {
  categories: ICategory[];
}

const ProductsFilter = ({
  categories,
}: IProductsFilterProps): React.JSX.Element => {
  const {
    handleChange,
    handleReset,
    isOpen,
    handleClick,
    handleChangeCategory,
    minPrice,
    maxPrice,
    searchTerm,
    category,
  } = useFilter();

  return (
    <div className={styles.filter}>
      <div className={styles.group}>
        <Text size="big" color="black" fontWeight="bold">
          Price
        </Text>

        <Input
          name="minPrice"
          placeholder="from"
          sizeInput="small"
          type="text"
          value={minPrice}
          onChange={handleChange}
        />

        <Input
          name="maxPrice"
          placeholder="to"
          sizeInput="small"
          type="text"
          value={maxPrice}
          onChange={handleChange}
        />
      </div>
      <div className={styles.group}>
        <Text size="big" color="black" fontWeight="bold">
          Change Category
        </Text>
        <DropDown
          className={styles.dropdown}
          value={category}
          items={categories}
          handleClick={handleClick}
          handleChangeCategory={handleChangeCategory}
          isOpen={isOpen}
          name="category"
        />
      </div>
      <div className={styles.group}>
        <Text size="big" color="black" fontWeight="bold">
          Search Peoducts
        </Text>
        <Input
          className={styles.search}
          type="text"
          value={searchTerm}
          sizeInput="small"
          name="searchTerm"
          onChange={handleChange}
          placeholder="Search"
        />
      </div>
      <Button
        className={styles.button}
        onClick={handleReset}
        bgColor="white"
        color="black"
        border="grey">
        Reset
      </Button>
    </div>
  );
};

export default ProductsFilter;
