const router = require("express").Router();
const ExerciseVideo = require("../models/exerciseVideo");
const ClientInfo = require("../models/clientInfoForm");
const Workout = require("../models/workout");

router.get("/", async (request, response) => {
  try {
    const workouts = await Workout.find({});
    response.json(workouts);
  } catch (error) {
    response.status(500).json({ error: "Failed to retrieve workouts" });
  }
});

router.post("/", async (request, response) => {
  try {
    const newWorkout = new Workout({ ...request.body });

    const savedWorkout = await newWorkout.save();
    response.status(201).json(savedWorkout);
  } catch (error) {
    response.status(500).json({ error: "Failed to save workouts" });
  }
});

router.get("/user/:userId", async (req, res) => {
  try {
    const userId = req.params.userId;
    const workouts = await Workout.find({ userId }).populate({
      path: "exercises.exerciseId",
      model: "ExerciseVideo",
    });
    res.json(workouts);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch workouts" });
  }
});

router.put("/workout/:workoutId/exercise/:exerciseId", async (req, res) => {
  const { workoutId, exerciseId } = req.params;
  const { date, weight, reps } = req.body;

  try {
    const workout = await Workout.findById(workoutId);
    if (!workout) {
      return res.status(404).json({ error: "Workout not found" });
    }

    const exerciseIndex = workout.exercises.findIndex(
      (exercise) => exercise.exerciseId.toString() === exerciseId,
    );
    if (exerciseIndex === -1) {
      return res.status(404).json({ error: "Exercise not found in workout" });
    }

    workout.exercises[exerciseIndex].performance.push({ date, weight, reps });
    await workout.save();
    res.json(workout);
  } catch (error) {
    res.status(500).json({ error: "Error updating workout" });
  }
});

module.exports = router;
