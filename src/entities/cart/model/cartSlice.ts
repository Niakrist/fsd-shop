import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type { IProductsInCart } from "./product-cart-slice.interface";

const loadCartFromLocalStorage = (): IProductsInCart[] => {
  const cart = localStorage.getItem("cart");
  return cart ? JSON.parse(cart) : [];
};

const saveCartInLocalStorage = (cart: IProductsInCart[]) => {
  localStorage.setItem("cart", JSON.stringify(cart));
};

const initialState: IProductsInCart[] = loadCartFromLocalStorage();

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    change: (state, action: PayloadAction<IProductsInCart>) => {
      const currentProduct = state.find(
        (item) => item.product.id === action.payload.product.id
      );
      if (currentProduct) {
        currentProduct.quantity = action.payload.quantity;
      } else {
        state.push({
          product: action.payload.product,
          quantity: action.payload.quantity,
        });
      }
      saveCartInLocalStorage(state);
    },
  },
});

export const { change } = cartSlice.actions;

export default cartSlice.reducer;
