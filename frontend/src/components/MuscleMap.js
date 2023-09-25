import React from "react";
import HumanAnatomy from "./HumanAnatomy";

const MuscleMap = () => {
  const styles = {
    training: {
      display: "flex",
      justifyContent: "center",
      flexDirection: "column",
      alignItems: "center",
      textAlign: "center",
    },
    header: {
      color: "#df0000",
      fontWeight: "bold",
      textDecoration: "underline",
      marginBottom: 40,
    },
    paragraph: {
      color: "#df0000",
      fontSize: 20,
      margin: 20,
    },
    link: {
      textDecoration: "none",
      color: "#df0000",
    },
  };

  return (
    <section className="training" style={styles.training}>
      <div>
        <h1 style={styles.header}>Interactive Muscle Anatomy Chart</h1>
        <p style={styles.paragraph}>
          Click on a muscle to learn about its functions and the best exercises.
        </p>
      </div>
      <HumanAnatomy />
      <div>
        <p style={styles.paragraph}>
          Image downloaded from{" "}
          <a
            href="https://musclecharts.net/"
            target="_blank"
            rel="noreferrer"
            aria-label="Link to musclecharts.net"
            style={styles.link}
          >
            Muscle Charts.
          </a>
        </p>
      </div>
    </section>
  );
};

export default MuscleMap;
