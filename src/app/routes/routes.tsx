import { createBrowserRouter } from "react-router-dom";
import { Layout } from "..";
import {
  CartPage,
  CategoriesPage,
  CategoryItemPage,
  HomePage,
  NotFound,
  ProductItemPage,
  ProductsPage,
} from "@/pages";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Layout,
    children: [
      { index: true, Component: HomePage },
      { path: "categories/", Component: CategoriesPage },
      { path: "categories/:slug", Component: CategoryItemPage },
      { path: "products", Component: ProductsPage },
      { path: "products/:slug", Component: ProductItemPage },
      { path: "cart", Component: CartPage },
      { path: "not-found", Component: NotFound },
    ],
  },
]);
