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
const trainingVideosRouter = require("./controllers/trainingVideos");
const nutritionVideosRouter = require("./controllers/nutritionVideos");
const mindsetVideosRouter = require("./controllers/mindsetVideos");
const muscleFunctionVideosRouter = require("./controllers/muscleFunctionVideos");
const exerciseVideosRouter = require("./controllers/exerciseVideos");
const aboutVideosRouter = require("./controllers/aboutVideos");
const organsRouter = require("./controllers/organs");
const usersRouter = require("./controllers/users");
const loginRouter = require("./controllers/login");
const clientInfoRouter = require("./controllers/clientInfoForms");
const workoutController = require("./controllers/workouts");
const stripeController = require("./controllers/stripe");
const { router: programsRouter } = require("./controllers/programs");
const programTemplateController = require("./controllers/programTemplates");
const workoutTemplateController = require("./controllers/workoutTemplates");
const {
  errorHandler,
  setPermissionsPolicy,
  userExtractor,
} = require("./utils/middleware");

const rateLimit = require("express-rate-limit");
const slowDown = require("express-slow-down");

logger.info("connecting to", config.MONGODB_URI);

mongoose
  .connect(config.MONGODB_URI)
  .then(() => {
    logger.info("connected to MongoDB");
  })
  .catch((error) => {
    logger.error("error connection to MongoDB:", error.message);
  });

app.set("trust proxy", 1);

app.use((req, res, next) => {
  if (
    req.hostname &&
    req.hostname.toLowerCase() === "www.bulletpointfitness.com"
  ) {
    const redirectUrl = `https://bulletpointfitness.com${req.originalUrl}`;
    return res.redirect(301, redirectUrl);
  }
  next();
});

app.use(
  helmet.contentSecurityPolicy({
    directives: {
      defaultSrc: ["'self'", "https://www.google-analytics.com/"],
      scriptSrc: [
        "'self'",
        "https://www.youtube.com",
        "https://youtube.com",
        "https://code.jquery.com",
        "https://cdn.jsdelivr.net",
        "https://maxcdn.bootstrapcdn.com",
        "https://www.googletagmanager.com",
        "https://www.google-analytics.com",
        "https://ssl.google-analytics.com",
        "'unsafe-inline'",
        ,
      ],
      styleSrc: [
        "'self'",
        "'unsafe-inline'",
        "https://maxcdn.bootstrapcdn.com",
      ],
      imgSrc: [
        "'self'",
        "https://www.youtube.com",
        "https://youtube.com",
        "https://i9.ytimg.com",
        "https://www.google-analytics.com",
        "www.google-analytics.com",
        "https://stats.g.doubleclick.net",
        "data:",
      ],
      frameSrc: [
        "'self'",
        "https://www.youtube.com",
        "https://youtube.com",
        "https://www.googletagmanager.com",
        "https://calendar.google.com",
      ],
      connectSrc: [
        "'self'",
        "https://region1.google-analytics.com",
        "https://www.google-analytics.com",
        "www.google-analytics.com",
        "https://stats.g.doubleclick.net",
      ],
      frameAncestors: ["'self'", "https://teckbuff.com/"],
    },
  }),
);

app.use(
  helmet.hsts({
    maxAge: 31536000,
    includeSubDomains: true,
    preload: true,
  }),
);

app.use(helmet.noSniff());
app.use(helmet.referrerPolicy({ policy: "strict-origin-when-cross-origin" }));
app.use(setPermissionsPolicy);
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 100,
});
app.use(limiter);
const speedLimiter = slowDown({
  windowMs: 15 * 60 * 1000,
  delayAfter: 100,
  delayMs: (used, req) => {
    const delayAfter = req.slowDown.limit;
    return (used - delayAfter) * 500;
  },
});
app.use(speedLimiter);
app.use(cors());
app.use(bodyParser.json());
app.use(express.static("build"));
app.use(express.json());
app.use(cookieParser());
app.use(bodyParser.urlencoded({ extended: true }));

app.use("/api/login", loginRouter);
app.use("/api/contactforms", contactFormsRouter);
app.use("/api/trainingvideos", trainingVideosRouter);
app.use("/api/nutritionvideos", nutritionVideosRouter);
app.use("/api/mindsetvideos", mindsetVideosRouter);
app.use("/api/musclefunctionvideos", muscleFunctionVideosRouter);
app.use("/api/exercisevideos", exerciseVideosRouter);
app.use("/api/aboutvideos", aboutVideosRouter);
app.use("/api/organs", organsRouter);
app.use("/api/users", usersRouter);
app.use("/api/clientinfo", userExtractor, clientInfoRouter);
app.use("/api/programs", userExtractor, programsRouter);
app.use("/api/workouts", userExtractor, workoutController);
app.use("/api/programTemplates", programTemplateController);
app.use("/api/workoutTemplates", workoutTemplateController);
app.use("/api/stripe", stripeController);

app.all("*", (req, res) => {
  res.sendFile(path.join(__dirname, "build", "index.html"));
});

if (process.env.NODE_ENV === "test") {
  const testingRouter = require("./controllers/testing");
  app.use("/api/testing", testingRouter);
}

app.use(errorHandler);

module.exports = app;
