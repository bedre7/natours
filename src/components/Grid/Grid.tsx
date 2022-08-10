import React from "react";
import classes from "./Grid.module.scss";

const Grid = () => {
  return (
    <section className={classes.grid}>
      <div className={classes.row}>
        <div className={classes["col-1-of-2"]}>Col 1 of 2</div>
        <div className={classes["col-1-of-2"]}>Col 1 of 2</div>
      </div>
      <div className={classes.row}>
        <div className={classes["col-1-of-3"]}>Col 1 of 3</div>
        <div className={classes["col-1-of-3"]}>Col 1 of 3</div>
        <div className={classes["col-1-of-3"]}>Col 1 of 3</div>
      </div>
      <div className={classes.row}>
        <div className={classes["col-1-of-3"]}>Col 1 of 3</div>
        <div className={classes["col-2-of-3"]}>Col 2 of 3</div>
      </div>
      <div className={classes.row}>
        <div className={classes["col-1-of-4"]}>Col 1 of 4</div>
        <div className={classes["col-1-of-4"]}>Col 1 of 4</div>
        <div className={classes["col-1-of-4"]}>Col 1 of 4</div>
        <div className={classes["col-1-of-4"]}>Col 1 of 4</div>
      </div>
      <div className={classes.row}>
        <div className={classes["col-1-of-4"]}>Col 1 of 4</div>
        <div className={classes["col-1-of-4"]}>Col 1 of 4</div>
        <div className={classes["col-2-of-4"]}>Col 2 of 4</div>
      </div>
      <div className={classes.row}>
        <div className={classes["col-1-of-4"]}>Col 1 of 4</div>
        <div className={classes["col-3-of-4"]}>Col 3 of 4</div>
      </div>
    </section>
  );
};

export default Grid;
