import React from "react";
import { Card, Col } from "react-bootstrap";
import BulletPointSVG from "./BulletPointSVG";

const Block = ({ title, description, link, customText }) => {
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
  };

  return (
    <Col md={4} className="block">
      <a href={link} style={{ textDecoration: "none" }}>
        <Card className="mb-4 box-shadow" border="danger" style={styles.text}>
          <Card.Body>
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
