const ContactForm = require("../models/contactForm");

const initialContactForms = [
  {
    email: "example@example.com",
    message: "This is an example message.",
  },
  {
    email: "test@test.com",
    message: "This is a test message",
  },
];

const nonExistingId = async () => {
  const contactForm = new ContactForm({
    email: "willremovethissoon@test.com",
    message: "willremovethissoon",
  });
  await contactForm.save();
  await contactForm.remove();

  return contactForm._id.toString();
};

const contactFormsInDb = async () => {
  const contactForm = await ContactForm.find({});
  return contactForm.map((b) => b.toJSON());
};

module.exports = {
  initialContactForms,
  nonExistingId,
  contactFormsInDb,
};
