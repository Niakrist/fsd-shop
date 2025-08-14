import React, { useEffect } from "react";
import styles from "./YandexMap.module.css";
import { Container } from "@/shared/ui";

const YandexMap = (): React.JSX.Element => {
  useEffect(() => {
    const container = document.getElementById("yandex-map-container");
    if (!container) return;

    const script = document.createElement("script");
    script.type = "text/javascript";
    script.async = true;
    script.src = `https://api-maps.yandex.ru/services/constructor/1.0/js/?um=constructor%3A9f7e1ae1aa50581d8c46030da27f776433a8365bacd5359918a612e76c6a136b&amp;width=100%25&amp;height=400&amp;lang=ru_RU&amp;scroll=true`;

    container.appendChild(script);

    return () => {
      if (container.contains(script)) {
        container.removeChild(script);
      }
    };
  }, []);

  return (
    <Container>
      <div className={styles.map} id="yandex-map-container" />
    </Container>
  );
};

export default YandexMap;
