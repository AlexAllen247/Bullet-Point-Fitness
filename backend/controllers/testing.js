const router = require("express").Router();
const ContactForm = require("../models/contactForm");

router.post("/reset", async (request, response) => {
  await ContactForm.deleteMany({});

  response.status(204).end();
});

module.exports = router;
