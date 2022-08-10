import React from "react";
import Button from "../Essentials/Button";
import Heading from "../Essentials/Heading";
import classes from "./Booking.module.scss";

const Booking = () => {
  return (
    <section className={classes.booking}>
      <div className={classes.row}>
        <div className={classes.book}>
          <form>
            <Heading text="Start booking now!" />
            <div className={classes.action}>
              <input type="text" placeholder="Full name" id="name" />
              <label htmlFor="name">Full name</label>
            </div>

            <div className={classes.action}>
              <input type="email" placeholder="Email address" id="email" />
              <label htmlFor="email">Email address</label>
            </div>

            <Button text="Next step" color="green"/>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Booking;
