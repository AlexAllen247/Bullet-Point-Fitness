const logger = require("./logger");
const crypto = require("crypto");

const errorHandler = (error, request, response, next) => {
  logger.error(error.message);

  if (error.name === "CastError") {
    return response.status(400).send({ error: "malformatted id" });
  } else if (error.name === "ValidationError") {
    return response.status(400).json({ error: error.message });
  }

  next(error);
};

const generateCspNonce = (req, res, next) => {
  req.nonce = crypto.randomBytes(16).toString("hex");
  res.locals.cspNonce = req.nonce;
  next();
};

module.exports = {
  errorHandler,
  generateCspNonce,
};
