import React from "react";
import { Container, Icon } from "@/shared/ui";
import { MENU } from "@/shared/constants";
import { Link } from "react-router-dom";

import styles from "./Header.module.css";
import { CartLink } from "@/entities";

const Header = (): React.JSX.Element => {
  return (
    <header className={styles.header}>
      <Container className={styles.container}>
        <Icon name={"iconLogo"} />
        <nav className={styles.nav}>
          <ul className={styles.list}>
            {MENU.map((item) => (
              <li key={item.url}>
                <Link className={styles.link} to={item.url}>
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <CartLink />
      </Container>
    </header>
  );
};

export default Header;
