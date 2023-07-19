const router = require("express").Router();
const nodemailer = require("nodemailer");
const ContactForm = require("../models/contactForm");

router.get("/", async (request, response) => {
  try {
    const contactForms = await ContactForm.find({});
    response.json(contactForms);
  } catch (error) {
    response.status(500).json({ error: "Failed to retrieve contact forms" });
  }
});

router.post("/", async (request, response) => {
  const { email, message } = request.body;

  if (!isValidEmail(email)) {
    return response
      .status(400)
      .json({ error: "Please enter a valid email address." });
  }

  if (!message || message.trim() === "") {
    return response.status(400).json({ error: "Message cannot be empty." });
  }
  const contactForm = new ContactForm({ ...request.body });

  try {
    const savedContactForm = await contactForm.save();

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.GMAIL,
        pass: process.env.GMAIL_PASS,
      },
    });

    const mailOptions = {
      from: process.env.GMAIL,
      to: process.env.GMAIL,
      subject: "Fitness Website contact form submission",
      html: `
      <p>Email: ${request.body.email}</p>
      <p>Message: ${request.body.message}</p>
    `,
    };

    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        console.log(error);
      } else {
        console.log("Email sent: " + info.response);
      }
    });

    response.status(201).json(savedContactForm);
  } catch (error) {
    console.error(error);
    response
      .status(500)
      .json({ error: "An error occurred while saving the contact form." });
  }
});

const isValidEmail = (email) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

module.exports = router;
