import { BASE_URL } from "@/shared/constants";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import type { ICategory, ParamsFilter } from "../model/category.interface";

export const categoriesApi = createApi({
  reducerPath: "categoriesApi",
  baseQuery: fetchBaseQuery({ baseUrl: BASE_URL }),
  endpoints: (builder) => ({
    getCategories: builder.query<ICategory[], null>({
      query: () => {
        return {
          url: "/categories",
        };
      },
    }),
    getCategoryBySlug: builder.query<ICategory, string>({
      query: (params) => {
        return {
          url: `/categories/slug/${params}`,
        };
      },
    }),
  }),
});

export const { useGetCategoriesQuery, useGetCategoryBySlugQuery } =
  categoriesApi;
