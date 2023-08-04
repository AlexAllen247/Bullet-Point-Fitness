import React from "react";
import HumanAnatomy from "./HumanAnatomy";

const Training = () => {
  const trainingStyle = {
    display: "flex",
    justifyContent: "center",
  };
  return (
    <section className="training" style={trainingStyle}>
      <HumanAnatomy />
    </section>
  );
};

export default Training;
