import React from "react";
import Footer from "../Footer/Footer";
import FeatureBox from "./FeatureBox";

import classes from "./Features.module.scss";

const Features = () => {
  return (
    <section className={classes.features}>
      <div className={classes.row}>
        <div className={classes["col-1-of-4"]}>
          <FeatureBox iconType="icon-basic-world" title="Explore the world" />
        </div>
        <div className={classes["col-1-of-4"]}>
          <FeatureBox iconType="icon-basic-compass" title="Meet nature" />
        </div>
        <div className={classes["col-1-of-4"]}>
          <FeatureBox iconType="icon-basic-map" title="Live healthier life" />
        </div>
        <div className={classes["col-1-of-4"]}>
          <FeatureBox iconType="icon-basic-heart" title="Explore the world" />
        </div>
      </div>
    </section>
  );
};

export default Features;
