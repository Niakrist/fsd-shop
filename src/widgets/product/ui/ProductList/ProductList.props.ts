import type { IProduct } from "@/entities";

export interface IProductListProps
  extends React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLUListElement>,
    HTMLUListElement
  > {
  cropCount?: number;
  products: IProduct[];
}
