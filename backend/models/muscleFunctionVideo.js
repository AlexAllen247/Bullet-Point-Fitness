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
  description: {
    type: String,
    required: true,
  },
  dateAdded: {
    type: Date,
    default: Date.now,
  },
  muscleName: {
    type: String,
    required: true,
  },
  duration: {
    type: String,
    required: true,
  },
});

schema.set("toJSON", {
  transform: (document, returnedObject) => {
    returnedObject.id = returnedObject._id.toString();
    delete returnedObject._id;
    delete returnedObject.__v;
  },
});

const MuscleFunctionVideo = mongoose.model("MuscleFunctionVideo", schema);

module.exports = MuscleFunctionVideo;
