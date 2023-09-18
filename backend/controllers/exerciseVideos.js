const router = require("express").Router();
const ExerciseVideo = require("../models/exerciseVideo");

router.get("/", async (request, response) => {
  try {
    const exerciseVideos = await ExerciseVideo.find({});
    response.json(exerciseVideos);
  } catch (error) {
    response.status(500).json({ error: "Failed to retrieve exercise videos" });
  }
});

router.post("/", async (request, response) => {
  try {
    const newExerciseVideo = new ExerciseVideo({ ...request.body });

    const savedExerciseVideo = await newExerciseVideo.save();
    response.status(201).json(savedExerciseVideo);
  } catch (error) {
    response.status(500).json({ error: "Failed to save exercise video" });
  }
});

module.exports = router;
