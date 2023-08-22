const router = require("express").Router();
const TrainingVideo = require("../models/trainingVideo");

router.get("/", async (request, response) => {
  try {
    const trainingVideos = await TrainingVideo.find({});
    response.json(trainingVideos);
  } catch (error) {
    response.status(500).json({ error: "Failed to retrieve training videos" });
  }
});

router.post("/", async (request, response) => {
  try {
    const newTrainingVideo = new TrainingVideo({ ...request.body });

    const savedTrainingVideo = await newTrainingVideo.save();
    response.status(201).json(savedTrainingVideo);
  } catch (error) {
    response.status(500).json({ error: "Failed to save training video" });
  }
});

module.exports = router;
