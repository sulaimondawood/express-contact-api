const mongoose = require("mongoose");

const userSchema = mongoose.Schema(
  {
    username: {
      type: String,
      required: [true, "Please enter a username"],
    },

    email: {
      type: String,
      required: [true, "Pleas enter user email address"],
      unique: [true, "Email address already taken"],
    },

    password: {
      type: String,
      required: [true, "Please enter user password"],
    },
  },
  {
    timestamps: true,
  }
);
module.exports = mongoose.model("User", userSchema);
