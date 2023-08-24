import React from "react";
import { Link } from "react-router-dom";
import Header from "./Header";
import LandingPagePic from "./LandingPagePic";

const Welcome = () => {
  const styles = {
    welcome: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      fontFamily: "Be Vietnam",
      color: "#df0000",
      height: "100vh",
    },
    paragraph: {
      textAlign: "center",
      fontSize: 20,
      textDecoration: "bold",
    },
  };

  return (
    <section className="welcome" style={styles.welcome}>
      <Header />
      <div style={styles.paragraph}>
        <p>
          Everyday I go to the gym and see numerous problems. I have the
          solutions and I want to help!
        </p>
      </div>
      <Link to="/app/training" style={styles.link}>
        <LandingPagePic />
      </Link>
    </section>
  );
};

export default Welcome;
