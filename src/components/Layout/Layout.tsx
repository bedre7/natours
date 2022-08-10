import React, { ReactNode } from "react";
import MainHeader from "./MainHeader";
import Navigation from "../Navigation/Navigation";

const Layout: React.FC<{ children: ReactNode }> = (props) => {
  return (
    <React.Fragment>
      <Navigation />
      <MainHeader />
      <main>{props.children}</main>
    </React.Fragment>
  );
};

export default Layout;
