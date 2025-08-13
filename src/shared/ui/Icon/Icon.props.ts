import type React from "react";

export interface IIconProps extends React.SVGProps<SVGSVGElement> {
  name: "iconLogo" | "iconCart";
  className?: string;
}
