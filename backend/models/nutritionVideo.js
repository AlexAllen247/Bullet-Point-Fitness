const mongoose = require("mongoose");

const schema = mongoose.Schema({
  embedUrl: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  dateAdded: {
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

const NutritionVideo = mongoose.model("NutritionVideo", schema);

module.exports = NutritionVideo;
