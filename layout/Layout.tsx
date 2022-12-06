import React from "react";
import cn from "classnames";
import styles from "./Layout.module.css";
import { LayoutProps } from "./LayoutProps";
import Header from "./Header/Header";
import Footer from "./Footer/Footer";
import Sidebar from "./Sidebar/Sidebar";

const Layout = ({ children }: LayoutProps): JSX.Element => {
  return (
    <>
      <Header />
      <div>
        <Sidebar />
        <div>{children}</div>
      </div>
      <Footer />
    </>
  );
};

export default Layout;
