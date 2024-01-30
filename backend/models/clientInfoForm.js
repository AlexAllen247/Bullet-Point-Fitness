const mongoose = require("mongoose");

const schema = mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  age: {
    type: Number,
    required: true,
  },
  gender: {
    type: String,
    required: true,
  },
  height: {
    // Assuming height is stored in centimeters
    type: Number,
    required: true,
  },
  weight: {
    // Assuming weight is stored in kilograms
    type: Number,
    required: true,
  },
  fitnessLevel: {
    type: String,
    enum: ["beginner", "intermediate", "advanced"],
    required: true,
  },
  goals: {
    type: String,
    required: true,
  },
  previousExerciseExperience: {
    type: String,
    enum: ["none", "beginner", "intermediate", "advanced"],
    required: true,
  },
  injuriesOrConditions: {
    type: String, // Or use an array if there can be multiple
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

schema.set("toJSON", {
  transform: (document, returnedObject) => {
    returnedObject.id = returnedObject._id.toString();
    delete returnedObject._id;
    delete returnedObject.__v;
  },
});

const ClientInfo = mongoose.model("ClientInfo", schema);

module.exports = ClientInfo;
