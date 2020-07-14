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

exports.login = (data) => {
  let errors = {};

  data.username = !isEmpty(data.username) ? data.username : "";
  data.password = !isEmpty(data.password) ? data.password : "";

  if (Validator.isEmpty(data.username)) {
    errors.username = "Username field is required";
  }

  if (Validator.isEmpty(data.password)) {
    errors.password = "Password field is required";
  }

  return {
    errors,
    isValid: isEmpty(errors),
  };
};

exports.register = (data) => {
  let errors = {};
  const userData = [
    "firstName",
    "lastName",
    "username",
    "password",
    "password2",
  ];

  userData.map((item) => {
    data[item] = !isEmpty(data[item]) ? data[item] : "";
    if (isEmpty(data[item])) {
      switch (item) {
        case "firstName":
          errors[item] = "First name field is required";
          break;
        case "lastName":
          errors[item] = "Last name field is required";
          break;
        case "password2":
          errors[item] = "Confirm password field is required";
          break;
        default:
          errors[item] = `${item} field is required`;
      }
    }
  });

  if (
    !Validator.isLength(data.password, {
      min: 6,
      max: 50,
    })
  ) {
    errors.password = "Password must be at least 6 characters";
  }

  if (!Validator.equals(data.password, data.password2)) {
    errors.password2 = "Passwords must match";
  }

  return {
    errors,
    isValid: isEmpty(errors),
  };
};
