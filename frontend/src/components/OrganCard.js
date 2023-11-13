import React from "react";
import { Card } from "react-bootstrap";
import BulletPointSVG from "./BulletPointSVG";

const OrganCard = ({ organ, selectedOrgan }) => {
  const styles = {
    text: {
      color: "#df0000",
      borderWidth: "2px",
      display: "flex",
      justifyContent: "center",
      flexDirection: "column",
      alignItems: "center",
      textAlign: "center",
    },
    description: {
      margin: "auto",
      padding: 10,
    },
    header: {
      textDecoration: "underline",
      fontWeight: "bold",
    },
    ul: {
      listStyleType: "none",
      padding: 0,
    },
  };

  if (!organ) {
    return null;
  }

  const createList = (items) => {
    if (!items || items.length === 0) {
      return "No items available.";
    }
    return (
      <ul style={styles.ul}>
        {items.map((item, index) => (
          <li key={index}>
            <BulletPointSVG />
            {item}
          </li>
        ))}
      </ul>
    );
  };

  return (
    <Card className="mb-4 box-shadow" border="danger" style={styles.text}>
      <Card.Body>
        <h3 style={styles.header}>{selectedOrgan}</h3>
        <div style={styles.description}>
          <h5 style={styles.header}>Function:</h5>
          <div>
            <BulletPointSVG />
            {organ.function}
          </div>
        </div>
        <div style={styles.description}>
          <h5 style={styles.header}>
            Essential Nutrients for Optimal Function:
          </h5>
          {createList(organ.nutrients)}
        </div>
        <div style={styles.description}>
          <h5 style={styles.header}>Foods Containing These Nutrients:</h5>
          {createList(organ.foods)}
        </div>
      </Card.Body>
    </Card>
  );
};

export default OrganCard;
