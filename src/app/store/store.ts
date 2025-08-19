import { configureStore } from "@reduxjs/toolkit";
import { useSelector, useDispatch } from "react-redux";

import filterSlice from "@/features/product/model/filterSlice";
import { categoriesApi } from "@/entities/category/api/categoriesApi";
import { productsApi } from "@/entities/product/api/productsApi";
import cartSlice from "@/entities/cart/model/cartSlice";

export const store = configureStore({
  reducer: {
    filter: filterSlice,
    cart: cartSlice,
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

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const useAppDispatch = useDispatch.withTypes<AppDispatch>();
export const useAppSelector = useSelector.withTypes<RootState>();
