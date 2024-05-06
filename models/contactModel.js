const mongoose = require("mongoose");

const contactSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Please add a contact name"],
    },

    email: {
      type: String,
      required: [true, "Please add an email address"],
    },

    phone: {
      type: String,
      required: [true, "Please add a contact phone number"],
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Contact", contactSchema);
