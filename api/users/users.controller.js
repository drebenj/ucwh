/**
 * Copyright (c) 2020
 *
 * @summary Controller for user MongoDB api function calls
 * @author Josh Dreben (joshdreben@gmail.com)
 *
 * Created At: 07-07-2020
 */

const User = require("./users.model");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

exports.login = (req, res) => {
  const username = req.body.username;
  const password = req.body.password;

  // find student by username
  User.findOne({
    username,
  }).then((user) => {
    if (!user) {
      return res.status(404).json({
        usernamenotfound: "Username not found",
      });
    }
    bcrypt.compare(password, user.password).then((isMatch) => {
      if (isMatch) {
        const payload = {
          id: user.id,
          firstName: user.firstName,
          status: user.status,
          password: user.password,
          admin: user.username == "jdreben" ? true : false,
        };
        jwt.sign(
          payload,
          process.env.SECRET_OR_KEY,
          {
            expiresIn: 31556926,
          },
          (err, token) => {
            res.json({
              success: true,
              token: "Bearer " + token,
            });
          }
        );
      } else {
        return res.status(412).json({
          passwordincorrect: "Password Incorrect",
        });
      }
    });
  });
};

exports.register = (req, res) => {
  User.findOne({
    username: req.body.username,
  }).then((user) => {
    if (user) {
      return res.status(409).json({
        username: "Username already exists",
      });
    } else {
      const newUser = new User({
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        username: req.body.username,
        password: req.body.password,
        status: req.body.username == "jdreben" ? "admin" : "applicant",
      });

      // hash password before saving to database
      bcrypt.genSalt(12, (_err, salt) => {
        bcrypt.hash(newUser.password, salt, (err, hash) => {
          if (err) throw err;
          newUser.password = hash;
          newUser
            .save()
            .then((user) => res.json(user))
            .catch((_err) =>
              res.status(422).json({
                invalidinputvalues: "Invalid input values",
              })
            );
        });
      });
    }
  });
};

exports.getAll = (req, res) => {
  User.find({}, "-password ", (err, result) => {
    if (err) {
      res.status(500).json(error);
    } else {
      res.json(result);
    }
  });
};
