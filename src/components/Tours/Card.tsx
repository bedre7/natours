import React, { FC } from "react";
import Button from "../Essentials/Button";
import "./Card.scss";

interface IProps {
  color: string;
  heading: string;
  details: string[];
  price: number;
  onClick: () => void;
}

const Card: FC<IProps> = (props) => {
  return (
    <div className="card">
      <div className="side-front">
        <div className={`picture ${props.color}`}>&nbsp;</div>
        <h4>
          <span className={props.color}>{props.heading}</span>
        </h4>
        <div className="details">
          <ul>
            {props.details.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>
      </div>
      <div className={`side-back ${props.color}`}>
        <div className="cta">
          <div className="price-box">
            <p className="text">Only</p>
            <p className="price">${props.price}</p>
          </div>
          <div className="action">
            <Button text="Book now!" onClick={props.onClick}/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
