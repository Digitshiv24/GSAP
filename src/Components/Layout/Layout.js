import React from "react";
import Header from './Header/header'
import "../styles/global.scss"

const Layout = ({ children }) => {
  return (
    <div>
      <Header />
      <main>{children}</main>
    </div>
  );
};

export default Layout;
