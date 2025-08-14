import { Input } from "@/shared/ui";
import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import DropDown from "../../../../shared/ui/DropDown/DropDown";

const ProductsFilter = () => {
  const [ptice, setPrice] = useState({ minPrice: "", maxPrice: "" });

  const [searchParams, setSearchParams] = useSearchParams();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPrice((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

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

    setSearchParams(params);
  }, [ptice, searchParams]);

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

      <DropDown />
    </div>
  );
};

export default ProductsFilter;
