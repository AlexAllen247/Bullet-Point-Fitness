import React, { useState, useEffect } from "react";
import {
  Form,
  Button,
  FormControl,
  FormGroup,
  FormLabel,
} from "react-bootstrap";
import Notification from "./Notification";
import consultationService from "../services/consultations";
import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";
import "react-big-calendar/lib/css/react-big-calendar.css";

const localizer = momentLocalizer(moment);

const Consultation = () => {
  const [events, setEvents] = useState([]);
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedTimeSlot, setSelectedTimeSlot] = useState(null);
  const [notification, setNotification] = useState(null);

  const notify = (message, type = "info") => {
    setNotification({ message, type });
    setTimeout(() => {
      setNotification(null);
    }, 3000);
  };

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

  const createConsultation = async (consultation) => {
    consultationService
      .create(consultation)
      .then(() => {
        notify(`A new consultation has been booked.`);
      })
      .catch((error) => {
        notify(
          "Booking a consultation failed: " + error.response.data.error,
          "alert",
        );
      });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (selectedDate && selectedTimeSlot) {
      const startTime = new Date(
        `${selectedDate}T${selectedTimeSlot}:00+01:00`,
      );
      const endTime = new Date(startTime);
      endTime.setMinutes(
        startTime.getMinutes() + (selectedTimeSlot === "30" ? 30 : 60),
      );
      const consultation = {
        summary: "Consultation Slot",
        location: "Online",
        description: "Consultation Slot Booked",
        start: {
          dateTime: startTime.toISOString(),
          timeZone: "Europe/Madrid",
        },
        end: {
          dateTime: endTime.toISOString(),
          timeZone: "Europe/Madrid",
        },
        attendees: [], // Modify if needed
        reminders: {
          useDefault: false,
          overrides: [
            { method: "email", minutes: 24 * 60 },
            { method: "popup", minutes: 10 },
          ],
        },
      };
      createConsultation(consultation);
    }
  };

  const timeSlots = [
    "07:00",
    "08:00",
    "09:00",
    "10:00",
    "11:00",
    "12:00",
    "13:00",
  ];

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
      <div>
        <Form onSubmit={handleSubmit}>
          <FormGroup controlId="formDate">
            <FormLabel>Date</FormLabel>
            <FormControl
              type="date"
              value={selectedDate}
              onChange={(e) => setSelectedDate(e.target.value)}
              required
            />
          </FormGroup>

          <FormGroup controlId="formTimeSlot">
            <FormLabel>Time Slot</FormLabel>
            <FormControl
              as="select"
              value={selectedTimeSlot}
              onChange={(e) => setSelectedTimeSlot(e.target.value)}
              style={{ width: "50%" }}
              required
            >
              {timeSlots.map((slot, index) => (
                <option key={index} value={slot}>
                  {slot}
                </option>
              ))}
            </FormControl>
          </FormGroup>

          <Button type="submit">Book Consultation</Button>
          <Notification notification={notification} />
        </Form>
      </div>
    </section>
  );
};

export default Consultation;
