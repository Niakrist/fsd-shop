import type { IProduct } from "@/entities/product";
import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

interface IProdictsInCart {
  product: IProduct;
  quantity: 1;
}

const initialState: IProdictsInCart[] = [];

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    increment: (state, action: PayloadAction<IProdictsInCart>) => {
      const currentProduct = state.find(
        (item) => action.payload.product.id === item.product.id
      );
      if (currentProduct) {
        ++currentProduct.quantity;
      } else {
        state.push({
          product: action.payload.product,
          quantity: action.payload.quantity,
        });
      }
    },
    decrement: (state, action: PayloadAction<IProdictsInCart>) => {
      const currentProduct = state.find(
        (item) => item.product.id === action.payload.product.id
      );
      if (currentProduct && currentProduct.quantity > 1) {
      }
    },
    change: (state, action: PayloadAction<IProduct>) => {
      const currentProduct = state.find(
        (item) => item.product.id === action.payload.id
      );
      if (currentProduct) {
      }
    },
  },
});

export const { increment, decrement } = cartSlice.actions;

export default cartSlice.reducer;
