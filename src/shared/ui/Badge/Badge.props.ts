export interface IBadgeProps
  extends React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLSpanElement>,
    HTMLSpanElement
  > {
  children: React.ReactNode;
  bgColor: "green";
  color: "white";
  className?: string;
}
