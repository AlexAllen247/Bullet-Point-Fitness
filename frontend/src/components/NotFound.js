import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  const styles = {
    section: {
      textAlign: "center",
      padding: 50,
      margin: 50,
      color: "#df0000",
    },
  };
  return (
    <section className="not-found" style={styles.section}>
      <h2>Oops page not found, please try a different URL.</h2>
      <Link to="/" aria-label="Link to Homepage">
        <h3>Return to Homepage</h3>
      </Link>
    </section>
  );
};

export default NotFound;
