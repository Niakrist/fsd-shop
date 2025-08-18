import { Button, Input } from "@/shared/ui";
import type { ICategory } from "@/entities";
import styles from "./ProductsFilter.module.css";
import { DropDown } from "@/shared/ui";
import { useFilter } from "@/features";

interface IProductsFilterProps {
  categories: ICategory[];
}

const ProductsFilter = ({ categories }: IProductsFilterProps) => {
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
    <div>
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

      <DropDown
        value={category}
        items={categories}
        handleClick={handleClick}
        handleChangeCategory={handleChangeCategory}
        isOpen={isOpen}
        name="category"
      />

      <Button
        className={styles.button}
        onClick={handleReset}
        bgColor="white"
        color="black"
        border="grey">
        Reset
      </Button>

      <Input
        type="text"
        value={searchTerm}
        sizeInput="small"
        name="searchTerm"
        onChange={handleChange}
        placeholder="Search"
      />
    </div>
  );
};

export default ProductsFilter;
