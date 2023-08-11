const router = require("express").Router();
const { google } = require("googleapis");

const SCOPES = process.env.SCOPES;
const GOOGLE_PRIVATE_KEY = process.env.GOOGLE_PRIVATE_KEY;
const GOOGLE_CLIENT_EMAIL = process.env.GOOGLE_CLIENT_EMAIL;
const GOOGLE_PROJECT_NUMBER = process.env.GOOGLE_PROJECT_NUMBER;
const GOOGLE_CALENDAR_ID = process.env.GOOGLE_CALENDAR_ID;
const KEY_FILE = process.env.KEY_FILE;

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

router.post("/", (req, res) => {
  const { summary, location, description, start, end, attendees, reminders } =
    req.body;

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

  const auth = new google.auth.GoogleAuth({
    keyFile: KEY_FILE,
    scopes: "https://www.googleapis.com/auth/calendar",
  });
  auth.getClient().then((a) => {
    calendar.events.insert(
      {
        auth: a,
        calendarId: GOOGLE_CALENDAR_ID,
        resource: event,
      },
      function (err, event) {
        if (err) {
          console.log(
            "There was an error contacting the Calendar service: " + err,
          );
          res
            .status(500)
            .jsonp({ message: "Failed to create event", error: err });
          return;
        }
        console.log("Event created: %s", event.data);
        res.jsonp({
          message: "Event successfully created!",
          event: event.data,
        });
      },
    );
  });
});

module.exports = router;
