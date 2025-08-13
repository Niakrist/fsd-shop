import { createBrowserRouter } from "react-router-dom";
import { Layout } from "..";
import {
  CartPage,
  CategoriesPage,
  HomePage,
  NotFound,
  ProductsPage,
} from "@/pages";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Layout,
    children: [
      { index: true, Component: HomePage },
      { path: "categories", Component: CategoriesPage },
      { path: "categories/:products", Component: ProductsPage },
      { path: "cart", Component: CartPage },
      { path: "not-found", Component: NotFound },
    ],
  },
]);
