import React, { ReactNode } from "react";
import MainHeader from "./MainHeader";

const Layout: React.FC<{ children: ReactNode }> = (props) => {
  return (
    <React.Fragment>
      <MainHeader />
      <main>{props.children}</main>
    </React.Fragment>
  );
};

export default Layout;
