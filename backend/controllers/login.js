const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const router = require("express").Router();
const User = require("../models/user");

router.post("/", async (request, response) => {
  try {
    const { username, password } = request.body;

    const user = await User.findOne({ username });
    const passwordCorrect =
      user === null ? false : await bcrypt.compare(password, user.passwordHash);

    if (!(user && passwordCorrect)) {
      return response.status(401).json({
        error: "Invalid username or password",
      });
    }

    const userForToken = {
      username: user.username,
      id: user._id,
    };

    const token = jwt.sign(userForToken, process.env.SECRET, {
      expiresIn: "24h",
    });

    response.status(200).send({
      token,
      username: user.username,
      email: user.email,
      phone: user.phone,
      id: user._id.toString(),
    });
  } catch (error) {
    next(error);
  }
});

module.exports = router;
