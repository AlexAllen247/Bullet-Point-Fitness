const router = require("express").Router();
const ExerciseVideo = require("../models/exerciseVideo");
const ClientInfo = require("../models/clientInfoForm");

const generateWorkout = async (clientInfo) => {
  const muscleGroups = ["Chest", "Back", "Legs", "Arms", "Shoulders"]; // Adjust according to your data
  let exercises = [];

  // Example: Selecting one exercise per muscle group
  for (const muscle of muscleGroups) {
    let query = { muscleName: muscle };

    // Adding more conditions based on client's fitness level
    if (clientInfo.fitnessLevel === "beginner") {
      query.difficultyLevel = "easy";
    } else if (clientInfo.fitnessLevel === "advanced") {
      query.difficultyLevel = "hard";
    }
    // Consider other clientInfo fields to refine your query

    // Fetch one exercise that matches the query
    const exercise = await ExerciseVideo.findOne(query);
    if (exercise) {
      exercises.push(exercise);
    }
  }

  // If you need to return a workout model
  const workout = new Workout({ exercises: exercises.map((ex) => ex._id) });
  await workout.save();
  return workout;

  // Or if you just need to return an array of exercises
  // return exercises.map(ex => ({
  //   title: ex.title,
  //   description: ex.description,
  //   videoUrl: ex.embedUrl,
  //   // Add sets, reps, etc., as per your logic
  // }));
};

router.post("/generate", async (req, res) => {
  try {
    const clientInfoId = req.body.clientInfoId;
    const clientInfo = await ClientInfo.findById(clientInfoId);
    if (!clientInfo) {
      return res.status(404).json({ error: "Client information not found" });
    }
    const workout = await generateWorkout(clientInfo);
    res.json(workout);
  } catch (error) {
    res.status(500).send({ error: "Error generating workout" });
  }
});

module.exports = router;
