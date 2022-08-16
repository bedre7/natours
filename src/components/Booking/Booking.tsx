import React, { FC, useRef, useState } from "react";
import Button from "../Essentials/Button";
import Heading from "../Essentials/Heading";
import classes from "./Booking.module.scss";

const Booking: FC<{ onClose: () => void }> = (props) => {
  const nameRef = useRef<HTMLInputElement>(null);
  const emailRef = useRef<HTMLInputElement>(null);
  const [nameIsValid, setNameIsValid] = useState(false);
  const [emailIsValid, setEmailIsValid] = useState(false);

  const nameChangeHandler = () => {
    const name = nameRef.current?.value;
    setNameIsValid(name?.length !== 0);
  };

  const emailChangeHandler = () => {
    const email = emailRef.current?.value;
    setEmailIsValid(email?.length !== 0);
  };

  return (
    <section className={classes.booking}>
      <div className={classes.row}>
        <Button variant="close" onClick={props.onClose} />
        <div className={classes.book}>
          <form>
            <Heading text="Start booking now!" />
            <div className={classes.action}>
              <input
                className={classes[`${nameIsValid ? "focus" : "invalid"}`]}
                type="text"
                ref={nameRef}
                placeholder="Full name"
                id="name"
                onChange={nameChangeHandler}
              />
              <label htmlFor="name">Full name</label>
            </div>

            <div className={classes.action}>
              <input
                className={classes[`${emailIsValid ? "focus" : "invalid"}`]}
                type="email"
                ref={emailRef}
                placeholder="Email address"
                id="email"
                onChange={emailChangeHandler}
              />
              <label htmlFor="email">Email address</label>
            </div>

            <Button text="Book" color="green" />
          </form>
        </div>
      </div>
    </section>
  );
};

export default Booking;
