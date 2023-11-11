import React, { forwardRef } from "react";
import { Card } from "react-bootstrap";
import BulletPointSVG from "./BulletPointSVG";

const OrganCard = forwardRef((props, ref) => {
  const { organ, selectedOrgan } = props;
  const styles = {
    text: {
      color: "#df0000",
      borderWidth: "2px",
    },
    description: {
      maxWidth: "1000px",
      margin: "auto",
      padding: 10,
    },
    header: {
      textDecoration: "underline",
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
    <Card
      className="mb-4 box-shadow"
      border="danger"
      ref={ref}
      style={styles.text}
    >
      <Card.Body>
        <Card.Title style={styles.header}>{selectedOrgan}</Card.Title>
        <Card.Text style={styles.description}>
          <strong>Function:</strong> {organ.function}
        </Card.Text>
        <Card.Text style={styles.description}>
          <strong>Nutrients:</strong> {createList(organ.nutrients)}
        </Card.Text>
        <Card.Text style={styles.description}>
          <strong>Foods:</strong>
          {createList(organ.foods)}
        </Card.Text>
      </Card.Body>
    </Card>
  );
});

export default OrganCard;
