const mongoose = require("mongoose");
const supertest = require("supertest");
const bcrypt = require("bcrypt");

const app = require("../app");
const helper = require("./test_helper");
const api = supertest(app);
const ContactForm = require("../models/contactForm");

beforeEach(async () => {
  await ContactForm.deleteMany({});
  await ContactForm.insertMany(helper.initialContactForms);
});

describe("when there are some contact forms in database", () => {
  test("those are returned as json", async () => {
    const response = await api
      .get("/api/contactforms")
      .expect(200)
      .expect("Content-Type", /application\/json/);

    expect(response.body).toHaveLength(helper.initialContactForms.length);
  });
  test("those are identified by field id", async () => {
    const response = await api
      .get("/api/contactforms")
      .expect(200)
      .expect("Content-Type", /application\/json/);

    expect(response.body[0].id).toBeDefined();
  });
});

describe("addition of a contact form", () => {
  test("succeeds if content valid", async () => {
    const newContactForm = {
      email: "www.test@test.com",
      message: "This is an example message that everything works.",
    };

    await api
      .post("/api/contactforms")
      .send(newContactForm)
      .expect(201)
      .expect("Content-Type", /application\/json/);

    const contactFormsAtEnd = await helper.contactFormsInDb();
    expect(contactFormsAtEnd).toHaveLength(
      helper.initialContactForms.length + 1,
    );

    const messages = contactFormsAtEnd.map((cf) => cf.message);
    expect(messages).toContain(
      "This is an example message that everything works.",
    );
  });

  test("fails if message is missing", async () => {
    const newContactForm = {
      email: "test@test.com",
    };

    await api
      .post("/api/contactforms")
      .send(newContactForm)
      .expect(400)
      .expect("Content-Type", /application\/json/);

    const contactFormsAtEnd = await helper.contactFormsInDb();
    expect(contactFormsAtEnd).toHaveLength(helper.initialContactForms.length);
  });
});

afterAll(() => {
  mongoose.connection.close();
});
