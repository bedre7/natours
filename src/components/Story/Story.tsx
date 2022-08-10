import React from "react";
import StyledLink from "../Essentials/StyledLink";
import classes from "./Story.module.scss";
import Mary from "../../img/nat-8.jpg";
import Jack from "../../img/nat-9.jpg";
import Heading from "../Essentials/Heading";
// import bgVideo from "../../img/video.mp4";

const Story = () => {
  return (
    <section>
      <div className={classes["bg-video"]}>
        {/* <video src={bgVideo} autoPlay muted loop /> */}
      </div>
      <Heading text="We make people genuinely happy"/>
      {stories.map((story) => {
        return (
          <div className={classes.row}>
            <div className={classes.story}>
              <figure>
                <img src={story.image} alt="Person on tour" />
                <figcaption>{story.name}</figcaption>
              </figure>
              <div className={classes.text}>
                <h3>{story.title}</h3>
                <p>{story.text}</p>
              </div>
            </div>
          </div>
        );
      })}
      <StyledLink text="Read all stories" />
    </section>
  );
};

const stories = [
  {
    image: Mary,
    name: "Mary Smith",
    title: "I had the best week ever with my family",
    text: `Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Aperiam, ipsum sapiente aspernatur libero repellat quis
          consequatur ducimus quam nisi exercitationem omnis earum qui.
          Aperiam, ipsum sapiente aspernatur libero repellat quis
          consequatur ducimus quam nisi exercitationem omnis earum qui.`,
  },
  {
    image: Jack,
    name: "Jack Nilson",
    title: "Wow! My life is different now",
    text: `Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Aperiam, ipsum sapiente aspernatur libero repellat quis
          consequatur ducimus quam nisi exercitationem omnis earum qui.
          Aperiam, ipsum sapiente aspernatur libero repellat quis
          consequatur ducimus quam nisi exercitationem omnis earum qui.`,
  },
];

export default Story;
