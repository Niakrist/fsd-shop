import React from "react";

export interface IInputProps
  extends React.DetailedHTMLProps<
    React.InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  > {
  name: "name" | "phone" | "email" | "minPrice" | "maxPrice" | "search";
  type: "text" | "tel" | "email";
  sizeInput: "small" | "big";
  value: string;
  placeholder: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}
