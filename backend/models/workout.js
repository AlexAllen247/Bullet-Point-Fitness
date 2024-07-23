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
      performance: [
        {
          date: { type: Date, default: Date.now },
          weight: Number,
          reps: Number,
        },
      ],
    },
  ],
  sessionDate: Date,
  createdAt: { type: Date, default: Date.now },
  programId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Program",
    required: true,
  },
});

workoutSchema.virtual("exerciseDetails", {
  ref: "ExerciseVideo",
  localField: "exercises.exerciseId",
  foreignField: "_id",
});

workoutSchema.set("toJSON", { virtuals: true });

const Workout = mongoose.model("Workout", workoutSchema);

module.exports = Workout;
