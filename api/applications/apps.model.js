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

const ApplicationSchema = new Schema({
  q1: {
    type: String,
    required: true,
  },
  q2: {
    type: String,
    required: true,
  },
  q3: {
    type: String,
    required: true,
  },
  q4: {
    type: String,
    required: true,
  },
  q5: {
    type: String,
    required: true,
  },
  q6: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    default: Date.now,
  },
});

module.exports = Application = mongoose.model("application", ApplicationSchema);
