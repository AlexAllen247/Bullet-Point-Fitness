import React from "react";
import HumanBack from "./HumanBack";
import HumanFront from "./HumanFront";
import TrialSvg from "./TrialSvg";

const Training = () => {
  return (
    <section className="training">
      <HumanFront />
      <HumanBack />
      <TrialSvg />
    </section>
  );
};

export default Training;
