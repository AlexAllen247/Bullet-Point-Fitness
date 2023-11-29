const mongoose = require("mongoose");

const programSchema = mongoose.Schema({
  age: {
    type: Number,
    required: true,
    trim: true,
  },
  gender: {
    type: String,
    required: true,
    trim: true,
  },
  height_in_cms: {
    type: Number,
    required: true,
    trim: true,
  },
  weight_in_kgs: {
    type: Number,
    required: true,
    trim: true,
  },
  fitness_goal: {
    type: String,
    required: true,
    enum: ["Goal1", "Goal2", "Goal3"], // Replace with actual fitness goals
    trim: true,
  },
  previous_exercise_experience: {
    type: String,
    required: true,
    enum: ["Experience1", "Experience2", "Experience3"], // Replace with actual experience levels
    trim: true,
  },
  current_activity_level: {
    type: String,
    required: true,
    enum: ["Level1", "Level2", "Level3"], // Replace with actual activity levels
    trim: true,
  },
  any_injuries_or_underlying_health_conditions: {
    type: String,
    trim: true,
    maxlength: 1000,
  },
  dateAdded: {
    type: Date,
    default: Date.now,
  },
});

programSchema.set("toJSON", {
  transform: (document, returnedObject) => {
    returnedObject.id = returnedObject._id.toString();
    delete returnedObject._id;
    delete returnedObject.__v;
  },
});

const Program = mongoose.model("Program", programSchema);

module.exports = Program;
