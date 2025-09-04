import React, { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";
import "../styles/global.css";
import Header from "./Header";
import Footer from "./Footer";

const Layout = ({ children, header = {}, footer = {} }) => {
  const { theme } = useContext(ThemeContext);
  
  return (
    <div className={`${theme} min-h-screen theme-bg-primary theme-text-primary`}>
      <Header header={header} />
      <main>{children}</main>
      <Footer footer={footer} />
    </div>
  );
};

export default Layout;