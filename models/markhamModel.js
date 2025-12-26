const mongoose = require("mongoose");

const markhamSchema = mongoose.Schema(
  {
    user_id: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "User",
    },
    name: {
      type: String,
      required: [
        true,
        "Please enter the name otherwise we will not allow you ",
      ],
    },
    email: {
      type: String,
      required: [true, "Please enter the email address "],
    },
    phoneNumber: {
      type: Number,
      required: true,
      min: [8, "must enter 8 digits"],
      max: [8, "must not enter more than 8 digits"],
    },
  },
  {
    timeStamps: true,
  }
);

module.exports = mongoose.model("markhamDetail", markhamSchema);
