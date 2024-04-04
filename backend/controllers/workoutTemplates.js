const router = require("express").Router();
const WorkoutTemplate = require("../models/workoutTemplate");

router.get("/", async (request, response) => {
  try {
    const workoutTemplates = await WorkoutTemplate.find({});
    response.json(workoutTemplates);
  } catch (error) {
    response
      .status(500)
      .json({ error: "Failed to retrieve workout templates" });
  }
});

router.post("/", async (request, response) => {
  try {
    const newWorkoutTemplate = new WorkoutTemplate({ ...request.body });

    const savedWorkoutTemplate = await newWorkoutTemplate.save();
    response.status(201).json(savedWorkoutTemplate);
  } catch (error) {
    response.status(500).json({ error: "Failed to save workout templates" });
  }
});

module.exports = router;
