import React, { forwardRef } from "react";
import { Card, Container } from "react-bootstrap";

const OrganCard = forwardRef((props, ref) => {
  const { organ, selectedOrgan } = props;
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
    },
  };

  return (
    <Container ref={ref} style={styles.text}>
      <h1 style={styles.header}>{selectedOrgan}</h1>
      <Container>
        <Card className="mb-4 box-shadow" border="danger" style={styles.text}>
          <Card.Body>
            <Card.Title style={styles.header}>{organ.name}</Card.Title>
            <Card.Text style={styles.description}>
              <strong>Function:</strong> {organ.function}
            </Card.Text>
            <Card.Text style={styles.description}>
              <strong>Nutrients:</strong> {organ.nutrients}
            </Card.Text>
            <Card.Text style={styles.description}>
              <strong>Foods:</strong>
              {organ.food}
            </Card.Text>
          </Card.Body>
        </Card>
      </Container>
    </Container>
  );
});

export default OrganCard;
