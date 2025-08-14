import type { ICategory } from "@/entities/category/@x/proruct";

export interface IProduct {
  id: number;
  title: string;
  slug: string;
  price: number;
  description: string;
  category: ICategory;
  images: string[];
}
