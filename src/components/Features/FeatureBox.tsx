import React, { FC } from "react";
import "../../assets/icon-font.css";
import classes from "./FeatureBox.module.scss";

interface IProps {
  iconType: string;
  title: string;
}

const FeatureBox: FC<IProps> = (props) => {
  return (
    <div className={classes["feature-box"]}>
      <i className={props.iconType}></i>
      <h3>{props.title}</h3>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus a,
        facere, libero exercitationem{" "}
      </p>
    </div>
  );
};

export default FeatureBox;
