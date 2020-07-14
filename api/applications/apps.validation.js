/**
 * Copyright (c) 2020
 *
 * @summary All form validation for users
 * @author Josh Dreben (joshdreben@gmail.com)
 *
 * Created At: 07-08-2020
 */

const Validator = require("validator");
const isEmpty = require("is-empty");

exports.apply = (data) => {
  let errors = {};

  const appData = ["q1", "q2", "q3", "q4", "q5", "q6"];

  appData.map((q) => {
    data[q] = !isEmpty(data[q]) ? data[q] : "";
    if (isEmpty(data[q])) {
      errors[q] = `Question ${q.substring(1)} is required!`;
    }
  });

  if (
    !Validator.isLength(data.q1, {
      min: 5,
      max: 5,
    })
  ) {
    errors.q1 = "Answer must be exactly 5 characters!";
  }

  return {
    errors,
    isValid: isEmpty(errors),
  };
};
