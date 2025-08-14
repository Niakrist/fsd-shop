import { categoriesApi, productsApi } from "@/entities";
import { configureStore } from "@reduxjs/toolkit";

export const store = configureStore({
  reducer: {
    [categoriesApi.reducerPath]: categoriesApi.reducer,
    [productsApi.reducerPath]: productsApi.reducer,
  },
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware().concat(
      categoriesApi.middleware,
      productsApi.middleware
    );
  },
});
