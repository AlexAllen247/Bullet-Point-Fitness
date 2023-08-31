import React from "react";
import HumanAnatomy from "./HumanAnatomy";

const Training = () => {
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
      marginTop: 20,
    },
    link: {
      textDecoration: "none",
      color: "#df0000",
    },
  };

  return (
    <section className="training" style={styles.training}>
      <div>
        <h3 style={styles.header}>Interactive Muscle Anatomy Chart</h3>
      </div>
      <HumanAnatomy />
      <div>
        <p style={styles.paragraph}>
          Image downloaded from{" "}
          <a
            href="https://musclecharts.net/"
            target="_blank"
            rel="noreferrer"
            aria-label="Github Profile"
            style={styles.link}
          >
            Muscle Charts.
          </a>
        </p>
      </div>
    </section>
  );
};

export default Training;
