import React from "react";
import classes from "./MealsGrid.module.css";
import MealItem from "./MealItem";

const MealsGrid = ({ meals }) => {
  return (
    <ul className={classes.meals}>
      {meals.map((meal) => (
        <li key={meal.id}>
          <MealItem {...meals} />
        </li>
      ))}
    </ul>
  );
};

export default MealsGrid;
