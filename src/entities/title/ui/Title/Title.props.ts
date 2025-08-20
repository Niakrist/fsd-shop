export interface ITitleProps
  extends React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLDivElement>,
    HTMLDivElement
  > {
  title: string;
  tag: "h1" | "h2";
  link?: string;
}
