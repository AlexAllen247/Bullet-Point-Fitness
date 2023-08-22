const config = require("./utils/config");
const logger = require("./utils/logger");
const express = require("express");
const app = express();
const cors = require("cors");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const cookieParser = require("cookie-parser");
const helmet = require("helmet");
const path = require("path");
require("express-async-errors");

const contactFormsRouter = require("./controllers/contactForms");
const consultationRouter = require("./controllers/consultations");
const trainingVideosRouter = require("./controllers/trainingVideos");
const { errorHandler } = require("./utils/middleware");

logger.info("connecting to", config.MONGODB_URI);

mongoose
  .connect(config.MONGODB_URI)
  .then(() => {
    logger.info("connected to MongoDB");
  })
  .catch((error) => {
    logger.error("error connection to MongoDB:", error.message);
  });

app.use(cors());
app.use(bodyParser.json());
app.use(express.static("build"));
app.use(express.json());
app.use(cookieParser());
app.use(helmet());
app.use(bodyParser.urlencoded({ extended: true }));

app.use("/api/contactforms", contactFormsRouter);
app.use("/api/consultations", consultationRouter);
app.use("/api/trainingvideos", trainingVideosRouter);

app.all("*", (req, res) => {
  res.status(404).sendFile(path.join(__dirname, "build", "index.html"));
});

if (process.env.NODE_ENV === "test") {
  const testingRouter = require("./controllers/testing");
  app.use("/api/testing", testingRouter);
}

app.use(errorHandler);

module.exports = app;
