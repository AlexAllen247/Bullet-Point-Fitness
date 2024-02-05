const mongoose = require("mongoose");

const workoutSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  exercises: [
    {
      exerciseId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "ExerciseVideo",
        required: true,
      },
      weight: { type: Number, default: null },
      reps: { type: Number, default: null },
    },
  ],
  sessionDate: Date,
  createdAt: { type: Date, default: Date.now },
});

workoutSchema.virtual("exerciseDetails", {
  ref: "ExerciseVideo",
  localField: "exercises.exerciseId",
  foreignField: "_id",
});

workoutSchema.set("toJSON", { virtuals: true });

const Workout = mongoose.model("Workout", workoutSchema);

module.exports = Workout;
