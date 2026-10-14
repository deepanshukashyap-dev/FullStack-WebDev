const mongoose = require("mongoose");

//Schema
const userSchema = new mongoose.Schema(
  {
    firstName: {
      type: String,
      require: true,
    },
    lastName: {
      type: String,
      require: false,
    },
    email: {
      type: String,
      require: true,
      unique: true,
    },
    gender: {
      type: String,
      require: true,
    },
    jobTitle: {
      type: String,
      require: true,
    },
  },
  { timestamps: true }
);
//Model
const User = mongoose.model("users", userSchema);

module.exports = User;