import React from "react";
import { Alert } from "react-bootstrap";

const Notification = ({ notification }) => {
  if (notification === null) {
    return null;
  }

  const variant = notification.type === "alert" ? "danger" : "success";

  const style = {
    textAlign: "center",
    fontFamily: "Niconne",
    padding: 0,
    margin: 0,
  };

  return (
    <Alert
      variant={variant}
      style={style}
      id="notification"
      aria-label={notification.type}
    >
      {notification.message}
    </Alert>
  );
};

export default Notification;
