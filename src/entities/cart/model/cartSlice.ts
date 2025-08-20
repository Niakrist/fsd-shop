import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type { IProductsInCart } from "./product-cart-slice.interface";
import type { IProduct } from "@/entities/product";

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
    addOrChangeItemInCart: (state, action: PayloadAction<IProductsInCart>) => {
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
    removeItemFromCart: (state, action: PayloadAction<IProduct>) => {
      const newState = state.filter(
        (item) => item.product.id !== action.payload.id
      );
      saveCartInLocalStorage(newState);
      return newState;
    },
    clearCart: () => {
      localStorage.removeItem("cart");
      return [];
    },
    incrementIteminCart: (state, action: PayloadAction<IProduct>) => {
      const product = state.find(
        (item) => item.product.id === action.payload.id
      );

      if (product) {
        product.quantity += 1;
        saveCartInLocalStorage(state);
      }
    },
    decrementIteminCart: (state, action: PayloadAction<IProduct>) => {
      const product = state.find(
        (item) => item.product.id === action.payload.id
      );
      if (product && product.quantity > 1) {
        product.quantity -= 1;
        saveCartInLocalStorage(state);
      }
    },
  },
});

export const {
  addOrChangeItemInCart,
  removeItemFromCart,
  clearCart,
  incrementIteminCart,
  decrementIteminCart,
} = cartSlice.actions;

export default cartSlice.reducer;
