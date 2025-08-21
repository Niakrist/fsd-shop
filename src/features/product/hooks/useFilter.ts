import { useEffect, useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "@/app/store/store";
import {
  handleChangeFilter,
  initializeFilter,
  onReset,
  type IFilter,
} from "../model/filterSlice";
import { useDebounce } from "@/shared/hooks";

export const useFilter = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [searchParams, setSearchParams] = useSearchParams();
  const { minPrice, maxPrice, searchTerm, category, limit, offset } =
    useAppSelector((state) => state.filter);

  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    const params = Object.fromEntries(searchParams.entries());
    const initialFilter: Partial<IFilter> = {};

    if (params.price_min) initialFilter.minPrice = params.price_min;
    if (params.price_max) initialFilter.maxPrice = params.price_max;
    if (params.title) initialFilter.searchTerm = params.title;
    if (params.categorySlug) initialFilter.category = params.categorySlug;
    if (params.limit) initialFilter.limit = params.limit;
    if (params.offset) initialFilter.offset = params.offset;

    dispatch(initializeFilter(initialFilter));
  }, [dispatch]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    if (name === "minPrice" || name === "maxPrice" || name === "searchTerm") {
      dispatch(handleChangeFilter({ key: name, value: value }));
    }
  };

  const handleChangePage = (value: string) => {
    if (value) {
      dispatch(handleChangeFilter({ key: "offset", value }));
    }
  };

  const handleChangeCategory = (category: string) => {
    if (category) {
      dispatch(handleChangeFilter({ key: "category", value: category }));
    }
    setIsOpen(false);
  };

  const handleClick = () => {
    setIsOpen((prev) => !prev);
  };

  const handleReset = () => {
    navigate("/products");
    dispatch(onReset());
  };

  const debounceValue = useDebounce(searchTerm, 2000);

  useEffect(() => {
    const params = new URLSearchParams(searchParams.toString());
    if (minPrice) {
      params.set("price_min", String(minPrice));
    } else {
      params.delete("price_min");
    }
    if (maxPrice) {
      params.set("price_max", String(maxPrice));
    } else {
      params.delete("price_max");
    }
    if (category) {
      params.set("categorySlug", category);
    } else {
      params.delete("categorySlug");
    }
    if (searchTerm) {
      params.set("title", debounceValue);
    } else {
      params.delete("title");
    }
    if (offset) {
      params.set("offset", offset);
    } else {
      params.delete("offset");
    }
    if (limit) {
      params.set("limit", limit);
    } else {
      params.delete("limit");
    }
    setSearchParams(params);
  }, [
    minPrice,
    maxPrice,
    category,
    searchParams,
    debounceValue,
    limit,
    offset,
  ]);

  return {
    handleChange,
    handleChangePage,
    handleReset,
    isOpen,
    handleClick,
    handleChangeCategory,
    minPrice,
    maxPrice,
    searchTerm,
    category,
    limit,
    offset,
  };
};
