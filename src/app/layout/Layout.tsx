import React from "react";
import { Outlet } from "react-router-dom";
import Header from "./Header/Header";
import styles from "./Layout.module.css";

const Layout = (): React.JSX.Element => {
  return (
    <>
      <div className={styles.wrapper}>
        <Header />
      </div>
      <Outlet />
    </>
  );
};

export default Layout;
