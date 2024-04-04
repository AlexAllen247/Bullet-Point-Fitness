const mongoose = require("mongoose");

const WorkoutTemplateSchema = new mongoose.Schema({
  title: String,
  description: String,
  exercises: [
    {
      exerciseId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "ExerciseVideo",
      },
    },
  ],
});

const WorkoutTemplate = mongoose.model(
  "WorkoutTemplate",
  WorkoutTemplateSchema,
);

module.exports = WorkoutTemplate;
