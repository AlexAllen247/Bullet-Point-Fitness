import React from "react";
import OrganChart from "./OrganChart";
import SEO from "./SEO";

const OrganMap = () => {
  const styles = {
    nutrition: {
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
      margin: 30,
    },
    paragraph: {
      color: "#df0000",
      fontSize: 20,
      margin: 30,
    },
    phrase: {
      color: "#df0000",
      fontSize: 26,
      margin: 10,
    },
    link: {
      textDecoration: "none",
      color: "#df0000",
    },
  };

  return (
    <section className="organ-map" style={styles.nutrition}>
      <SEO
        title="Organ Map | Bullet Point Fitness"
        description="Discover the nutrients necessary for your body's internal organs. Explore our organ map to understand the benefits of nutrition on overall health."
        keywords="organ map, internal organs, health benefits, nutrition, body anatomy"
        canonicalUrl="https://bulletpointfitness.com/organ-map"
        ogImage="https://bulletpointfitness.com/og-image.png"
      />
      <div>
        <p style={styles.phrase}>
          Your Clickable Guide to Nutrient-Rich Organ Health
        </p>
        <h1 style={styles.header}>Interactive Organ Anatomy Chart</h1>
        <p style={styles.paragraph}>Click on an organ to find out more</p>
      </div>
      <OrganChart />
      <div>
        <p style={styles.paragraph}>
          Image downloaded from{" "}
          <a
            href="http://www.freepik.com"
            target="_blank"
            rel="noreferrer"
            aria-label="Link to musclecharts.net"
            style={styles.link}
          >
            brgfx / Freepik.
          </a>
        </p>
      </div>
    </section>
  );
};

export default OrganMap;
