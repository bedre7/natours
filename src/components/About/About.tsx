import React from "react";
import classes from "./About.module.scss";
import img1 from "../../img/nat-1-large.jpg";
import img2 from "../../img/nat-2-large.jpg";
import img3 from "../../img/nat-3-large.jpg";
import StyledLink from "../Essentials/StyledLink";
import Heading from "../Essentials/Heading";

const About = () => {
  return (
    <section className={classes.about}>
      <Heading text="Exciting tours for adventurous people" />

      <div className={classes.row}>
        <div className={classes["col-1-of-2"]}>
          <h3>You're going to fall in love with nature</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quia,
            quasi dolorum qui tempore, porro voluptatum reiciendis, officiis
            dolorem ipsam corporis aperiam.
          </p>

          <h3>Live adventures like you never have before</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam
            suscipit, incidunt repudiandae possimus earum eius natus labore unde
            quis accusantium.
          </p>
          <StyledLink text="Learn more" />
        </div>
        <div className={classes["col-1-of-2"]}>
          <div className={classes.composition}>
            <img src={img1} alt="background" className={classes.p1} />
            <img src={img2} alt="background" className={classes.p2} />
            <img src={img3} alt="background" className={classes.p3} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
