import type { IProduct } from "@/entities/product";

export interface IProductsInCart {
  product: IProduct;
  quantity: number;
}
