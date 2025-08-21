import React, { useState } from "react";
import { Button, Input } from "@/shared/ui";
import type { IFormForSendProps } from "./FormForSend.props";
import styles from "./FormForSend.module.css";

const FormForSend = ({
  inputColor,
  borderInput,
  backgroundInput,
  colorPlaceholder,
  bgButton,
  colorButton,
}: IFormForSendProps): React.JSX.Element => {
  const [dataForm, setDataForm] = useState({ name: "", phone: "", email: "" });

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setDataForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  return (
    <form className={styles.form}>
      <Input
        name="name"
        type="text"
        sizeInput="big"
        value={dataForm.name}
        onChange={onChange}
        placeholder="Name"
        borderInput={borderInput}
        backgroundInput={backgroundInput}
        colorPlaceholder={colorPlaceholder}
        inputColor={inputColor}
      />
      <Input
        name="phone"
        type="tel"
        sizeInput="big"
        value={dataForm.phone}
        onChange={onChange}
        placeholder="Phone number"
        borderInput={borderInput}
        backgroundInput={backgroundInput}
        colorPlaceholder={colorPlaceholder}
        inputColor={inputColor}
      />
      <Input
        name="email"
        type="email"
        sizeInput="big"
        value={dataForm.email}
        onChange={onChange}
        placeholder="Email"
        borderInput={borderInput}
        backgroundInput={backgroundInput}
        colorPlaceholder={colorPlaceholder}
        inputColor={inputColor}
      />
      <Button
        className={styles.button}
        type="submit"
        color={colorButton}
        bgColor={bgButton}>
        Get a discount
      </Button>
    </form>
  );
};

export default FormForSend;
