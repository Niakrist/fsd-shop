export interface IButtonProps
  extends React.DetailedHTMLProps<
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {
  children: React.ReactNode;
  className?: string;
  color: "white" | "black" | "green";
  bgColor: "white" | "black" | "green";
  border?: "white" | "black";
}
