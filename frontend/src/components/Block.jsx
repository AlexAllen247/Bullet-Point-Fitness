import React from "react";
import { Card, Col } from "react-bootstrap";
import BulletPointSVG from "./BulletPointSVG";

const Block = ({ title, description, link, customText, icon }) => {
  const styles = {
    text: {
      color: "#df0000",
      borderWidth: "2px",
    },
    description: {
      maxWidth: "800px",
      margin: "auto",
      padding: 10,
    },
    header: {
      textDecoration: "underline",
      color: "#df0000",
    },
    icon: {
      width: "50px",
      height: "50px",
      marginBottom: "15px",
    },
  };

  return (
    <Col md={4} className="block">
      <a href={link} style={{ textDecoration: "none" }}>
        <Card className="mb-4 box-shadow" border="danger" style={styles.text}>
          <Card.Body>
            <div style={styles.icon}>{icon}</div>
            <Card.Title style={styles.header}>{title}</Card.Title>
            <Card.Text style={styles.description}>
              <BulletPointSVG />
              {description}
              <br />
              <BulletPointSVG />
              {customText}
            </Card.Text>
          </Card.Body>
        </Card>
      </a>
    </Col>
  );
};

export default Block;
