import React from "react";
import styles from "./Footer.module.css";
import { Container, Icon } from "@/shared/ui";

const Footer = (): React.JSX.Element => {
  const currentYear = new Date().getFullYear();
  return (
    <footer className={styles.footer}>
      <Container className={styles.container}>
        <Icon name="iconLogo" />
        <p className={styles.copy}>&copy; {currentYear} Shop</p>
      </Container>
    </footer>
  );
};

export default Footer;
