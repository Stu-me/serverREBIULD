const mongoose = require("mongoose");

const markhamSchema = mongoose.Schema(
  {
    user_id: {
      // type: mongoose.Schema.Types.ObjectId,
      type: String,
      unique:[true,"enter the unique id"],
      required: [true,"enter the user_idrs"],
      // ref: "User",
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
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("markhamDetail", markhamSchema);
