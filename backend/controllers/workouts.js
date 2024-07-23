const router = require("express").Router();
const Workout = require("../models/workout");
const Program = require("../models/program");
const mongoose = require("mongoose");

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
    const activeProgram = await Program.findOne({ userId, status: "active" });
    if (!activeProgram) {
      return res.status(404).json({ error: "No active program found" });
    }
    const workouts = await Workout.find({
      programId: activeProgram._id,
    }).populate({
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
  const { date = new Date(), weight, reps } = req.body;

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

router.get("/inactive/:userId", async (req, res) => {
  try {
    const userId = req.params.userId;

    const inactivePrograms = await Program.find({ userId, status: "inactive" });

    if (!inactivePrograms.length) {
      return res.status(404).json({ error: "No inactive programs found" });
    }

    const inactiveWorkouts = await Workout.find({
      programId: { $in: inactivePrograms.map((program) => program._id) },
    }).populate({
      path: "exercises.exerciseId",
      model: "ExerciseVideo",
    });

    res.json(inactiveWorkouts);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch inactive workouts" });
  }
});

router.put("/workout/:workoutId/order", async (req, res) => {
  const { workoutId } = req.params;
  const { exercises } = req.body;

  console.log("Updating workout order for workoutId:", workoutId);
  console.log("New exercises order:", exercises);

  try {
    const workout = await Workout.findById(workoutId);
    if (!workout) {
      console.error("Workout not found for workoutId:", workoutId);
      return res.status(404).json({ error: "Workout not found" });
    }

    workout.exercises = exercises.map((exercise) => ({
      exerciseId: new mongoose.Types.ObjectId(exercise.exerciseId),
      performance: exercise.performance || [],
    }));

    await workout.save();
    res.json(workout);
  } catch (error) {
    console.error("Error updating workout order:", error);
    res.status(500).json({ error: "Error updating workout order" });
  }
});

module.exports = router;
