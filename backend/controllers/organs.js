const router = require("express").Router();
const Organ = require("../models/organ");

router.get("/", async (request, response) => {
  try {
    const organs = await Organ.find({});
    response.json(organs);
  } catch (error) {
    response.status(500).json({ error: "Failed to retrieve organ information" });
  }
});

router.post("/", async (request, response) => {
  try {
    const newOrgan = new Organ({ ...request.body });

    const savedOrgan = await newOrgan.save();
    response.status(201).json(savedOrgan);
  } catch (error) {
    response.status(500).json({ error: "Failed to save organ information" });
  }
});

module.exports = router;
