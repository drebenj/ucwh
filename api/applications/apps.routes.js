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
const Application = require("./apps.model");

// load input validation
const validation = require("./apps.validation");

router.get(
  "/:id",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    Application.findById(req.params.id)
      .then((app) => {
        res.json(app);
      })
      .catch((err) => res.status(404).json(err));
  }
);

router.post(
  "/",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    const { errors, isValid } = validation.apply(req.body);
    if (!isValid) {
      return res.status(400).json(errors);
    }
    Application.findOne({
      _id: req.user._id,
    }).then((app) => {
      if (app) {
        return res.status(409).json({
          application: "Application already created",
        });
      } else {
        const newApp = new Application({
          _id: req.user._id,
          q1: req.body.q1,
          q2: req.body.q2,
          q3: req.body.q3,
          q4: req.body.q4,
          q5: req.body.q5,
          q6: req.body.q6,
        });

        newApp
          .save()
          .then((app) => res.json(app))
          .catch((err) =>
            res.status(422).json({ invalidinputvalues: "Invalid Input Values" })
          );
      }
    });
  }
);

module.exports = router;
