import React, { FC } from "react";
import "./Button.scss";

const Button: FC<{ text: string, color?:string }> = (props) => {
  return <button className={`button ${props.color || "white"}`}>{props.text}</button>;
};

export default Button;
