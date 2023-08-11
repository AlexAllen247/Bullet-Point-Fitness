import React, { useState, useEffect } from "react";
//import { Button, Form, Container, Card } from "react-bootstrap";
//import Notification from "./Notification";
import consultationService from "../services/consultations";
import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";
import "react-big-calendar/lib/css/react-big-calendar.css";

const localizer = momentLocalizer(moment);

const Consultation = () => {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    // Fetch already booked slots using the consultationService
    consultationService
      .get()
      .then((responseData) => {
        const fetchedEvents = responseData.events.map((event) => ({
          title: "Booked Slot",
          start: new Date(event.start.dateTime),
          end: new Date(event.end.dateTime),
        }));
        setEvents(fetchedEvents);
      })
      .catch((error) => {
        console.error("Error fetching events:", error);
      });
  }, []);
  /*
  const [notification, setNotification] = useState(null);

  const notify = (message, type = "info") => {
    setNotification({ message, type });
    setTimeout(() => {
      setNotification(null);
    }, 3000);
  };

  const createConsultation = async (consultation) => {
    consultationService
      .create(consultation)
      .then(() => {
        notify(`A new consultation by has created.`);
      })
      .catch((error) => {
        notify(
          "Creating a message failed: " + error.response.data.error,
          "alert",
        );
      });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Form submitted!");
    createConsultation({ email, message });
    setEmail("");
    setMessage("");
  };
  */

  return (
    <section className="consultation">
      <div style={{ height: "500px" }}>
        <Calendar
          localizer={localizer}
          events={events}
          startAccessor="start"
          endAccessor="end"
          style={{ height: 500, margin: "50px" }}
        />
      </div>
    </section>
  );
};

export default Consultation;
