import React from "react";
import styles from "./Input.module.css";

interface IInputProps
  extends React.DetailedHTMLProps<
    React.InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  > {
  name: "name" | "phone" | "email";
  type: "text" | "tel" | "email";
  value: string;
  placeholder: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const Input = ({ name, type, value, placeholder, onChange }: IInputProps) => {
  return (
    <input
      className={styles.input}
      value={value}
      onChange={onChange}
      name={name}
      id={name}
      type={type}
      placeholder={placeholder}
      autoComplete="off"
    />
  );
};

export default Input;
