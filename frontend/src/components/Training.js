import React from "react";
import HumanAnatomy from "./HumanAnatomy";

const Training = () => {
  const trainingStyle = {
    display: "flex",
    justifyContent: "space-between",
  };
  return (
    <section className="training" style={trainingStyle}>
      <HumanAnatomy />
    </section>
  );
};

export default Training;
