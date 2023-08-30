const router = require("express").Router();
const MuscleFunctionVideo = require("../models/muscleFunctionVideo");

router.get("/", async (request, response) => {
  try {
    const muscleFunctionVideos = await MuscleFunctionVideo.find({});
    response.json(muscleFunctionVideos);
  } catch (error) {
    response
      .status(500)
      .json({ error: "Failed to retrieve muscle function videos" });
  }
});

router.post("/", async (request, response) => {
  try {
    const newMuscleFunctionVideo = new MuscleFunctionVideo({ ...request.body });

    const savedMuscleFunctionVideo = await newMuscleFunctionVideo.save();
    response.status(201).json(savedMuscleFunctionVideo);
  } catch (error) {
    response
      .status(500)
      .json({ error: "Failed to save muscle function video" });
  }
});

module.exports = router;
