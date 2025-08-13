import React from "react";
import styles from "./Subscribe.module.css";
import { Container, Htag } from "@/shared/ui";

const Subscribe = (): React.JSX.Element => {
  return (
    <section className={styles.section}>
      <Container className={styles.container}>
        <Htag color="white" size="medium" tag="h2" className={styles.title}>
          5% off on the first order
        </Htag>
        <div className={styles.wrapper}>
          <img src="./images/first-order.png" alt="" />
          <form action=""></form>
        </div>
      </Container>
    </section>
  );
};

export default Subscribe;
