import React, { Suspense } from "react";
import classes from "./page.module.css";
import Link from "next/link";
import MealsGrid from "@/components/meals/MealsGrid";
import { getMeals } from "@/lib/meals";

const FetchMeals = async () => {
  const meals = await getMeals();
  return <MealsGrid meals={meals} />;
};

const Meals = () => {
  return (
    <>
      <header className={classes.header}>
        <h1>
          Delicious meals, created {""}
          <span className={classes.highlight}>by you</span>
        </h1>
        <p>Choose your favorite recipe and cook it yourself.</p>
        <p className={classes.cta}>
          <Link href={"/meals/share"}>Share your Favoritw Recipe</Link>
        </p>
      </header>
      <main className={classes.main}>
        <Suspense
          fallback={<p className={classes.loading}>Fetching meals...</p>}
        >
          <FetchMeals />
        </Suspense>
      </main>
    </>
  );
};

export default Meals;
