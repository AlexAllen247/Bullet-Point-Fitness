import React from "react";
import HumanAnatomy from "./HumanAnatomy";

const Training = () => {
  const styles = {
    training: {
      display: "flex",
      justifyContent: "center",
      flexDirection: "column",
      alignItems: "center",
    },
    paragraph: {
      fontSize: 20,
      color: "#df0000",
    },
  };

  return (
    <section className="training" style={styles.training}>
      <HumanAnatomy />
      <div>
        <p style={styles.paragraph}>
          Image downloaded from{" "}
          <a
            href="https://musclecharts.net/"
            target="_blank"
            rel="noreferrer"
            aria-label="Github Profile"
          >
            Muscle Charts.
          </a>
        </p>
      </div>
    </section>
  );
};

export default Training;
