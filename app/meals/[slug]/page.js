import React from "react";

const MealsDetails = ({ params }) => {
  return (
    <main>
      <h1 style={{ color: "white", textAlign: "center" }}>Meals Details</h1>
      <p>{params.slug}</p>
    </main>
  );
};

export default MealsDetails;
