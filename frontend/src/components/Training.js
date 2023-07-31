import React from "react";
import HumanBack from "./HumanBack";
import HumanFront from "./HumanFront";

const Training = () => {
  const trainingStyle = {
    display: "flex",
    justifyContent: "space-between",
  };
  return (
    <section className="training" style={trainingStyle}>
      <HumanFront />
      <HumanBack />
    </section>
  );
};

export default Training;
