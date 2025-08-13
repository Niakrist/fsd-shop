import React, { useState } from "react";
import styles from "./FormForSend.module.css";
import { Button, Input } from "@/shared/ui";

const FormForSend = (): React.JSX.Element => {
  const [dataForm, setDataForm] = useState({ name: "", phone: "", email: "" });

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setDataForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  return (
    <form className={styles.form}>
      <Input
        name="name"
        type="text"
        value={dataForm.name}
        onChange={onChange}
        placeholder="Name"
      />
      <Input
        name="phone"
        type="tel"
        value={dataForm.phone}
        onChange={onChange}
        placeholder="Phone number"
      />
      <Input
        name="email"
        type="email"
        value={dataForm.email}
        onChange={onChange}
        placeholder="Email"
      />
      <Button type="submit" color="black" bgColor="white">
        Get a discount
      </Button>
    </form>
  );
};

export default FormForSend;
