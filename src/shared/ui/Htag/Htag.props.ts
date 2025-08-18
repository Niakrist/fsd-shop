export interface IHtagProps
  extends React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLHeadingElement>,
    HTMLHeadingElement
  > {
  tag: "h1" | "h2";
  size: "werySmall" | "small" | "medium" | "large";
  color: "white" | "black";
  children: React.ReactNode;
}
