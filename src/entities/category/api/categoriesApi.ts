import { BASE_URL } from "@/shared/constants";
import {} from "@reduxjs/toolkit/query";
import type { ICategory } from "../model/category.interface";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

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
  }),
});

export const { useGetCategoriesQuery } = categoriesApi;
