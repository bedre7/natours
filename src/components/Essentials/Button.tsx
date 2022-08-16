import React, { FC } from "react";
import classes from "./Button.module.scss";

interface IProps {
  text?: string;
  variant?: string;
  color?: string;
  onClick?: () => void
}

const Button: FC<IProps> = (props) => {
  if (props.variant === "close")
    return <button className={classes.close} onClick={props.onClick}>&times;</button>;

  return (
    <button className={`${classes.button} ${props.color || classes.white}`} onClick={props.onClick}>
      {props.text}
    </button>
  );
};

export default Button;
