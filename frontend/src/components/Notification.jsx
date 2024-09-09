import React from "react";
import { Alert } from "react-bootstrap";

const Notification = ({ notification }) => {
  if (!notification) return null;

  const variant = notification.type === "alert" ? "danger" : "success";

  const styles = {
    notification: {
      textAlign: "center",
      padding: "15px",
      margin: "20px auto",
      maxWidth: "600px",
      fontSize: "18px",
      fontWeight: "bold",
      color: "#fff",
      backgroundColor: notification.type === "alert" ? "#df0000" : "#28a745",
      borderColor: notification.type === "alert" ? "#df0000" : "#28a745",
      borderRadius: "5px",
    },
  };

  return (
    <Alert
      variant={variant}
      style={styles.notification}
      aria-label={notification.type}
    >
      {notification.message}
    </Alert>
  );
};

export default Notification;
