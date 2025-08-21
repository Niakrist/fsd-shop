import type { IProduct } from "./product";

export interface IProductsInCart {
  product: IProduct;
  quantity: number;
}
