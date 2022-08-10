import React from "react";
import { Link } from "react-router-dom";
import classes from "./Navigation.module.scss";

const Navigation = () => {
  return (
    <div className={classes.navigation}>
      <input type="checkbox" id="navi-toggle" />
      <label htmlFor="navi-toggle">
        <span></span>
      </label>

      <div className={classes.background}>&nbsp;</div>

      <nav>
        <ul>
            <li><Link to="/"><span>01</span>About Natours</Link></li>
            <li><Link to="/"><span>02</span>Your benefits</Link></li>
            <li><Link to="/"><span>03</span>Popular Tours</Link></li>
            <li><Link to="/"><span>04</span>Stories</Link></li>
            <li><Link to="/"><span>05</span>Book now</Link></li>
        </ul>
      </nav>
    </div>
  );
};

export default Navigation;
