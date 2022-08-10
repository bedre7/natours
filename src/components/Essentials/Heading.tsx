import React, { FC } from "react";
import "./Heading.scss";

const Heading: FC<{ text: string }> = (props) => {
  return <h2>{props.text}</h2>;
};

export default Heading;
