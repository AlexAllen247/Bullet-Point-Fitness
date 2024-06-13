const mongoose = require("mongoose");

const programSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  title: { type: String, required: true },
  description: String,
  startDate: { type: Date, required: true },
  workouts: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Workout",
    },
  ],
  status: {
    type: String,
    enum: ["active", "inactive"],
    default: "active",
  },
  createdAt: { type: Date, default: Date.now },
});

programSchema.set("toJSON", { virtuals: true });

const Program = mongoose.model("Program", programSchema);

module.exports = Program;
