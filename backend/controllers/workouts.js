const router = require("express").Router();
const ExerciseVideo = require("../models/exerciseVideo");
const ClientInfo = require("../models/clientInfoForm");
const Workout = require("../models/workout");

const generateWorkout = async (clientInfo) => {
  const muscleGroups = [
    "Adductors",
    "Erector Spinae",
    "Lats",
    "Rotator Cuff",
    "Trapezius",
    "Forearms",
    "Biceps",
    "Triceps",
    "Rear Delts",
    "Side Delts",
    "Front Delts",
    "Abdominals",
    "Obliques",
    "Chest",
    "Calves",
    "Tibialis",
    "Hamstrings",
    "Quads",
    "Hip Flexors",
    "Glutes",
    "Neck",
  ];

  let exercises = [];

  for (const muscle of muscleGroups) {
    let query = { muscleName: muscle };

    const exercise = await ExerciseVideo.findOne(query);
    if (exercise) {
      exercises.push({
        exerciseId: exercise._id,
        name: exercise.title,
        weight: "",
        reps: "",
      });
    }
  }

  const workout = new Workout({
    userId: clientInfo.userId,
    exercises: exercises,
    programId: programId,
  });

  await workout.save();
  return workout;
};

router.post("/generate", async (req, res) => {
  try {
    const { clientInfoId, programId } = req.body;
    const clientInfo = await ClientInfo.findById(clientInfoId).lean();
    if (!clientInfo) {
      return res.status(404).json({ error: "Client information not found" });
    }

    const workout = await generateWorkout(clientInfo, programId);
    res.json(workout);
  } catch (error) {
    res.status(500).json({ error: "Error generating workout" });
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
