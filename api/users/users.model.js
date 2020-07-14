/**
 * Copyright (c) 2020
 *
 * @summary MongoDB schema for student objects
 * @author Josh Dreben (joshdreben@gmail.com)
 *
 * Created At: 07-02-2020
 */

const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const UserSchema = new Schema({
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  username: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  status: {
    type: String,
    default: "Applicant",
  },
  date: {
    type: Date,
    default: Date.now,
  },
});

module.exports = User = mongoose.model("user", UserSchema);
