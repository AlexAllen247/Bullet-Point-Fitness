import React from "react";
import TrialSvg from "./TrialSvg";

const Nutrition = () => {
  const nutritionStyle = {
    display: "flex",
    justifyContent: "center",
  };
  return (
    <section className="nutrition" style={nutritionStyle}>
      <TrialSvg />
    </section>
  );
};

export default Nutrition;
