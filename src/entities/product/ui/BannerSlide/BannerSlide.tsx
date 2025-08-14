import React from "react";
import styles from "./BannerSlide.module.css";
import { Button, Container, Htag } from "@/shared/ui";

const BannerSlide = (): React.JSX.Element => {
  return (
    <section
      className={styles.bannerSlide}
      style={{ backgroundImage: `url(/images/banner.jpg)` }}>
      <Container>
        <Htag className={styles.paddingTop} color="white" size="large" tag="h1">
          Amazing Discounts on Garden Products!
        </Htag>
        <Button className={styles.buttonBanner} bgColor="green" color="white">
          Check out
        </Button>
      </Container>
    </section>
  );
};

export default BannerSlide;
