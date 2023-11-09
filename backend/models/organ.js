const mongoose = require("mongoose");

const organSchema = mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  function: {
    type: String,
    required: true
  },
  nutrients: {
    type: String,
    required: true
  },
  foods: {
    type: String,
    required: true
  },
  dateAdded: {
    type: Date,
    default: Date.now
  }
});

organSchema.set("toJSON", {
  transform: (document, returnedObject) => {
    returnedObject.id = returnedObject._id.toString();
    delete returnedObject._id;
    delete returnedObject.__v;
  }
});

const Organ = mongoose.model("Organ", organSchema);

module.exports = Organ;
