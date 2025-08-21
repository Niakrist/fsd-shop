import type { IProduct } from "@/shared/interface";

export interface IProductListProps
  extends React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLUListElement>,
    HTMLUListElement
  > {
  products: IProduct[];
}
