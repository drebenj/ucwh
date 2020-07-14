/**
 * Copyright (c) 2020
 *
 * @summary Express API routes for students
 * @author Josh Dreben (joshdreben@gmail.com)
 *
 * Created At: 07-02-2020
 */

const express = require("express");
const router = express.Router();
const passport = require("passport");
const usersController = require("./users.controller");
const User = require("./users.model");

// load input validation
const validation = require("./users.validation");

// @route POST api/users/register
// @desc Register user
// @access Public
router.post("/register", (req, res) => {
  // form validation
  const { errors, isValid } = validation.register(req.body);
  if (!isValid) {
    return res.status(400).json(errors);
  }

  usersController.register(req, res);
});

// @route POST api/users/login
// @desc Login user and return JWT token
// @access Public
router.post("/login", (req, res) => {
  // form validation
  const { errors, isValid } = validation.login(req.body);
  if (!isValid) {
    return res.status(400).json(errors);
  }
  usersController.login(req, res);
});

router.put(
  "/:id",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    if (req.user._id != req.params.id) {
      return res
        .status(400)
        .json({ unauthorized: "You are not authorized to update this user" });
    }

    User.findByIdAndUpdate(req.params.id, { status: "under review!" })
      .then((user) => res.json(user))
      .catch((err) => res.status(404).json(err));
  }
);

router.put(
  "/accept/:id",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    if (req.user.status === "admin") {
      User.findByIdAndUpdate(req.params.id, { status: "accepted!" })
        .then((user) => res.json(user))
        .catch((err) => res.status(404).json(err));
    } else {
      res.status(401).json({ error: "You are not authorized!!!" });
    }
  }
);

// @route GET api/users/roster
// @desc Get all registered users
// @access Logged in only (Bearer Auth Token)
router.get(
  "/roster",
  passport.authenticate("jwt", {
    session: false,
  }),
  usersController.getAll
);

router.get(
  "/:id",
  passport.authenticate("jwt", {
    session: false,
  }),
  (req, res) => {
    User.findById(req.params.id)
      .then((user) => res.json(user))
      .catch((err) => res.json(err));
  }
);

module.exports = router;
