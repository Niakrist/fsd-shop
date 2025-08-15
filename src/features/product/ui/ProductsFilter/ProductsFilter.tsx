import { Button, Input } from "@/shared/ui";
import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import DropDown from "../DropDown/DropDown";
import type { ICategory } from "@/entities";
import styles from "./ProductsFilter.module.css";
import { useDebounce } from "@/shared/hooks/useDebounce";

interface IProductsFilterProps {
  categories: ICategory[];
}

const ProductsFilter = ({ categories }: IProductsFilterProps) => {
  const [ptice, setPrice] = useState({ minPrice: "", maxPrice: "" });
  const [value, setValue] = useState<ICategory | null>(null);
  const [search, seTsearch] = useState("");
  const [searchParams, setSearchParams] = useSearchParams();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPrice((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const debounceValue = useDebounce(search, 2000);

  console.log("debounceValue: ", debounceValue);

  useEffect(() => {
    const params = new URLSearchParams(searchParams.toString());
    if (ptice.minPrice) {
      params.set("price_min", String(ptice.minPrice));
    } else {
      params.delete("price_min");
    }
    if (ptice.maxPrice) {
      params.set("price_max", String(ptice.maxPrice));
    } else {
      params.delete("price_max");
    }
    if (value?.slug) {
      params.set("categorySlug", value.slug);
    } else {
      params.delete("categorySlug");
    }
    if (debounceValue) {
      params.set("title", debounceValue);
    } else {
      params.delete("title");
    }

    setSearchParams(params);
  }, [ptice, value, searchParams, debounceValue]);

  const onReset = () => {
    setPrice({ minPrice: "", maxPrice: "" });
    setValue(null);
    seTsearch("");
  };

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    seTsearch(e.target.value);
  };

  return (
    <div>
      <Input
        name="minPrice"
        placeholder="from"
        sizeInput="small"
        type="text"
        value={ptice.minPrice}
        onChange={handleChange}
      />

      <Input
        name="maxPrice"
        placeholder="to"
        sizeInput="small"
        type="text"
        value={ptice.maxPrice}
        onChange={handleChange}
      />

      <DropDown
        value={value as ICategory}
        setValue={setValue}
        items={categories}
      />

      <Button
        className={styles.button}
        onClick={onReset}
        bgColor="white"
        color="black"
        border="grey">
        Reset
      </Button>

      <Input
        type="text"
        value={search}
        sizeInput="small"
        name="search"
        onChange={handleSearch}
        placeholder="Search"
      />
    </div>
  );
};

export default ProductsFilter;
