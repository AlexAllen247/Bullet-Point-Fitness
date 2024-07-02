const mongoose = require("mongoose");

const schema = mongoose.Schema({
  username: {
    type: String,
    required: true,
    minlength: 3,
  },
  passwordHash: String,
  email: { type: String, required: true, unique: true },
  phone: { type: String, required: true },
  clientInfoForms: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "ClientInfo",
    },
  ],
});

schema.set("toJSON", {
  transform: (document, returnedObject) => {
    returnedObject.id = returnedObject._id.toString();
    delete returnedObject._id;
    delete returnedObject.__v;
    delete returnedObject.passwordHash;
  },
});

const User = mongoose.model("User", schema);

module.exports = User;
