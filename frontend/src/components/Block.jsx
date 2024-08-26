import React from "react";
import { Card, Col } from "react-bootstrap";
import BulletPointSVG from "./BulletPointSVG";

const Block = ({ title, description, link }) => {
  const styles = {
    text: {
      color: "#fff",
      borderWidth: "2px",
      backgroundColor: "#df0000",
    },
    description: {
      maxWidth: "800px",
      margin: "auto",
      padding: 10,
    },
    header: {
      textDecoration: "underline",
      color: "#fff",
    },
    svg: {
      margin: 10,
    },
  };

  return (
    <Col md={4} className="block">
      <a href={link} style={{ textDecoration: "none" }}>
        <Card className="mb-4 box-shadow" border="danger" style={styles.text}>
          <Card.Body>
            <Card.Title style={styles.header}>
              <span style={styles.svg}>
                <BulletPointSVG />
              </span>
              {title}
            </Card.Title>
            <Card.Text style={styles.description}>{description}</Card.Text>
          </Card.Body>
        </Card>
      </a>
    </Col>
  );
};

export default Block;
