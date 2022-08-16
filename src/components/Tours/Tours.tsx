import React, { FC, ReactElement } from "react";
import Button from "../Essentials/Button";
import Heading from "../Essentials/Heading";
import Card from "./Card";
import classes from "./Tours.module.scss";

const Tours:FC<{onClick(): void}> = (props) => {
  return (
    <section className={classes.tours}>
      <Heading text="Most popular tours" />
      <div className={classes.row}>
        {cards.map((card) => {
          return (
            <div className={classes["col-1-of-3"]} key={card.id}>
              <Card
                heading={card.heading}
                price={card.price}
                details={card.details}
                color={card.color}
                onClick={props.onClick}
              />
            </div>
          );
        })}
      </div>
      <div className="action">
        <Button color="green" text="Discover All Tours"/>
      </div>
    </section>
  );
};

export default Tours;

const cards = [
  {
    id: 1,
    heading: "The Sea Explorer",
    price: 297,
    color: "yellow",
    details: [
      "3 day tours",
      "Up to 20 people",
      "2 tour gides",
      "Sleep in peace",
      "Difficulty: easy",
    ],
  },
  {
    id: 2,
    heading: "The Forest Hiker",
    price: 497,
    color: "green",
    details: [
      "7 day tours",
      "Up to 40 people",
      "4 tour gides",
      "Sleep in peace",
      "Difficulty: medium",
    ],
  },
  {
    id: 3,
    heading: "The Snow Adventurer",
    price: 897,
    color: "blue",
    details: [
      "5 day tours",
      "Up to 30 people",
      "6 tour gides",
      "Sleep in peace",
      "Difficulty: hard",
    ],
  },
];
