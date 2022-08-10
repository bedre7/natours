import React from "react";
import Button from "../Essentials/Button";
import Heading from "../Essentials/Heading";
import Card from "./Card";
import classes from "./Tours.module.scss";

const Tours = () => {
  return (
    <section className={classes.tours}>
      <Heading text="Most popular tours" />
      <div className={classes.row}>
        {cards.map((card) => {
          return (
            <div className={classes["col-1-of-3"]}>
              <Card
                heading={card.heading}
                price={card.price}
                details={card.details}
                color={card.color}
              />
            </div>
          );
        })}
      </div>
      <div className="action">
        <Button color="green" text="Discover All Tours" />
      </div>
    </section>
  );
};

export default Tours;

const cards = [
  {
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
