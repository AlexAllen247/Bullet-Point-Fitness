const mongoose = require("mongoose");

const schema = mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  sessionDuration: {
    type: Number,
    required: true,
  },
  sessionsPerWeek: {
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
