import React from "react";
import { Link } from "react-router-dom";
import SEO from "./SEO";

const NotFound = ({ homeLink }) => {
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
      <SEO
        title="Page Not Found | Bullet Point Fitness"
        description="Sorry, the page you're looking for doesn't exist. Return to the home page or explore our site to find what you need."
        keywords="page not found, 404 error, missing page, Bullet Point Fitness"
        ogImage="https://bulletpointfitness.com/og-image.png"
      />
      <h2>
        Sorry, the page you're looking for cannot be found. Try using the
        navigation menu or return to the homepage.
      </h2>
      <Link to={homeLink} aria-label="Link to Homepage">
        <h3>Return to Homepage</h3>
      </Link>
    </section>
  );
};

export default NotFound;
