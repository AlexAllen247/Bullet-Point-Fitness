const router = require("express").Router();
const { google } = require("googleapis");
const nodemailer = require("nodemailer");

const SCOPES = process.env.SCOPES;
const GOOGLE_PRIVATE_KEY = process.env.GOOGLE_PRIVATE_KEY;
const GOOGLE_CLIENT_EMAIL = process.env.GOOGLE_CLIENT_EMAIL;
const GOOGLE_PROJECT_NUMBER = process.env.GOOGLE_PROJECT_NUMBER;
const GOOGLE_CALENDAR_ID = process.env.GOOGLE_CALENDAR_ID;
const KEY_FILE = process.env.KEY_FILE;
const GMAIL = process.env.GMAIL;
const GMAIL_PASS = process.env.GMAIL_PASS;

const jwtClient = new google.auth.JWT(
  GOOGLE_CLIENT_EMAIL,
  null,
  GOOGLE_PRIVATE_KEY,
  SCOPES,
);

const calendar = google.calendar({
  version: "v3",
  project: GOOGLE_PROJECT_NUMBER,
  auth: jwtClient,
});

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: GMAIL,
    pass: GMAIL_PASS,
  },
});

router.get("/", (req, res) => {
  calendar.events.list(
    {
      calendarId: GOOGLE_CALENDAR_ID,
      timeMin: new Date().toISOString(),
      maxResults: 10,
      singleEvents: true,
      orderBy: "startTime",
    },
    (error, result) => {
      if (error) {
        res.send(JSON.stringify({ error: error }));
      } else {
        if (result.data.items.length) {
          res.send(JSON.stringify({ events: result.data.items }));
        } else {
          res.send(JSON.stringify({ message: "No upcoming events found." }));
        }
      }
    },
  );
});

router.post("/", async (req, res) => {
  const { summary, location, description, start, end, attendees, reminders } =
    req.body;

  try {
    // Fetch events on the same day
    const { data } = await calendar.events.list({
      calendarId: GOOGLE_CALENDAR_ID,
      timeMin: start.dateTime,
      timeMax: end.dateTime,
      singleEvents: true,
      orderBy: "startTime",
    });

    const isOverlap = data.items.some((item) => {
      const existingStart = new Date(item.start.dateTime).getTime();
      const existingEnd = new Date(item.end.dateTime).getTime();
      const newStart = new Date(start.dateTime).getTime();
      const newEnd = new Date(end.dateTime).getTime();

      // Check if times overlap
      return newStart < existingEnd && newEnd > existingStart;
    });

    if (isOverlap) {
      res.status(400).send({ message: "This timeslot is already booked." });
      return;
    }

    const event = {
      summary,
      location,
      description,
      start,
      end,
      attendees: attendees || [],
      reminders: reminders || {
        useDefault: false,
        overrides: [
          { method: "email", minutes: 24 * 60 },
          { method: "popup", minutes: 10 },
        ],
      },
    };

    const auth = await new google.auth.GoogleAuth({
      keyFile: KEY_FILE,
      scopes: "https://www.googleapis.com/auth/calendar",
    }).getClient();

    calendar.events.insert(
      {
        auth: auth,
        calendarId: GOOGLE_CALENDAR_ID,
        resource: event,
      },
      (err, createdEvent) => {
        if (err) {
          console.log(
            "There was an error contacting the Calendar service: ",
            err,
          );
          res
            .status(500)
            .jsonp({ message: "Failed to create event", error: err });
          return;
        }
        console.log("Event created: %s", createdEvent.data);

        const mailOptions = {
          from: GMAIL,
          to: GMAIL,
          subject: "New Consultation booked for Bullet Point Fitness!",
          text: `A session has been booked for ${req.body.start.dateTime} to ${req.body.end.dateTime}.`,
        };

        transporter.sendMail(mailOptions, (emailErr, info) => {
          if (emailErr) {
            console.error("Error sending email:", emailErr);
          } else {
            console.log("Notification email sent:", info.response);
          }
        });

        res.jsonp({
          message: "Event successfully created!",
          event: createdEvent.data,
        });
      },
    );
  } catch (error) {
    console.error("Error:", error);
    res.status(500).send({ message: "Failed to create event" });
  }
});

module.exports = router;
