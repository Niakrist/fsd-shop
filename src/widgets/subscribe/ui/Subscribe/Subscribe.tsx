import React from "react";
import { Container, Htag } from "@/shared/ui";
import { FormForSend } from "@/features";
import styles from "./Subscribe.module.css";

const Subscribe = (): React.JSX.Element => {
  return (
    <section className={styles.section}>
      <Container>
        <div className={styles.content}>
          <Htag color="white" size="medium" tag="h2" className={styles.title}>
            5% off on the first order
          </Htag>
          <div className={styles.wrapper}>
            <img src="./images/first-order.png" alt="" />
            <FormForSend
              bgButton="white"
              backgroundInput="transparent"
              borderInput="white"
              colorPlaceholder="white"
              colorButton="black"
              inputColor="white"
            />
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Subscribe;
