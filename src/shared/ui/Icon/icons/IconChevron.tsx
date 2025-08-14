import React from "react";
import type { IIconsProps } from "./Icons.props";

const IconChevron = ({
  className,
  ...props
}: IIconsProps): React.JSX.Element => {
  return (
    <svg
      className={className}
      {...props}
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <path
        d="M16 7L10 12.9998L4 7"
        stroke="currentColor"
        strokeWidth="1.34998"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default IconChevron;
