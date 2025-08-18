import { BASE_URL } from "@/shared/constants";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import type { IProduct } from "../model/product.interface";

export const productsApi = createApi({
  reducerPath: "productsApi",
  baseQuery: fetchBaseQuery({ baseUrl: BASE_URL }),
  endpoints: (builder) => ({
    getProducts: builder.query<IProduct[], string>({
      keepUnusedDataFor: 0,
      query: (parapms) => {
        return {
          url: `/products/?${parapms ? parapms : ""}`,
        };
      },
    }),
    getProductBySlug: builder.query<IProduct, string>({
      query: (slug) => {
        return {
          url: `/products/slug/${slug}`,
        };
      },
    }),
    getAllProductsByCategory: builder.query<IProduct[], number>({
      query: (id) => {
        return {
          url: `/categories/${id}/products`,
        };
      },
    }),
  }),
});

export const {
  useGetProductsQuery,
  useGetProductBySlugQuery,
  useGetAllProductsByCategoryQuery,
} = productsApi;
