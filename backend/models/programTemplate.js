const mongoose = require("mongoose");

const ProgramTemplateSchema = new mongoose.Schema({
  title: String,
  description: String,
  workouts: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "WorkoutTemplate",
    },
  ],
});

const ProgramTemplate = mongoose.model(
  "ProgramTemplate",
  ProgramTemplateSchema,
);

module.exports = ProgramTemplate;
