import { Container, Icon, WrapperAddress } from "@/shared/ui";
import React from "react";
import styles from "./Contacts.module.css";

const Contacts = (): React.JSX.Element => {
  return (
    <section className={styles.section}>
      <Container className={styles.wrapper}>
        <WrapperAddress title="Phone">
          <a className={styles.link} href="tel:74993506604">
            +7 (499) 350-66-04
          </a>
        </WrapperAddress>
        <WrapperAddress title="Socials">
          <div className={styles.iconGroup}>
            <a
              href="#"
              className={styles.iconLink}
              target="_blank"
              rel="nofollow  noopener">
              <Icon name="iconInstagram" />
            </a>
            <a
              href="#"
              className={styles.iconLink}
              target="_blank"
              rel="nofollow  noopener">
              <Icon name="iconWhatsapp" />
            </a>
          </div>
        </WrapperAddress>
        <WrapperAddress title="Address">
          <p className={styles.text}>
            Dubininskaya Ulitsa, 96, Moscow, Russia, 115093
          </p>
        </WrapperAddress>
        <WrapperAddress title="Working Hours">
          <p className={styles.text}>24 hours a day</p>
        </WrapperAddress>
      </Container>
    </section>
  );
};

export default Contacts;
