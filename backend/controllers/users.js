const bcrypt = require("bcrypt");
const router = require("express").Router();
const User = require("../models/user");

router.get("/", async (request, response) => {
  try {
    const users = await User.find({});
    response.json(users);
  } catch (error) {
    console.error(error);
    response
      .status(500)
      .json({ error: "An error occurred while processing the request." });
  }
});

router.post("/", async (request, response) => {
  try {
    const { username, password } = request.body;

    if (!password || password.length < 3) {
      return response.status(400).json({
        error: "invalid password",
      });
    }

    const existingUser = await User.findOne({ username });
    if (existingUser) {
      return response.status(400).json({
        error: "username must be unique",
      });
    }

    const saltRounds = 10;
    const passwordHash = await bcrypt.hash(password, saltRounds);

    const user = new User({
      username,
      passwordHash,
    });

    const savedUser = await user.save();

    response.status(201).json(savedUser);
  } catch (error) {
    console.error(error);
    response
      .status(500)
      .json({ error: "An error occurred while processing the request." });
  }
});

module.exports = router;
