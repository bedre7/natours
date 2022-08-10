import React from "react";
import classes from "./MainHeader.module.scss";
import logo from "../../img/logo-white.png";
import Button from "../Essentials/Button";

const MainHeader: React.FC = () => {
  return (
    <div className={classes.header}>
      <div className={classes["logo-box"]}>
        <img src={logo} alt="Logo" />
      </div>
      <div className={classes["text-box"]}>
        <h1>
          <span className={classes["main-heading"]}>Outdoors</span>
          <span className={classes["sub-heading"]}>is where life happens</span>
        </h1>
        <Button text="Explore the world"/>
      </div>
    </div>
  );
};

export default MainHeader;
