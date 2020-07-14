/**
 * Copyright (c) 2020
 *
 * @summary MongoDB+Express+Passport server implementation
 * @author Josh Dreben (joshdreben@gmail.com)
 *
 * Created At: 07-02-2020
 */

// imports: dotenv, express, mongoDB, body-parser, helmet, passportjs
require("dotenv").config();
const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const helmet = require("helmet");
const passport = require("passport");
const path = require("path");

const users = require("./api/users/users.routes");
const applications = require("./api/applications/apps.routes");
const db = require("./config/db");

const port = process.env.PORT || 5000;
const app = express();

// middlewares
app.use(cors());
app.use(
  bodyParser.urlencoded({
    extended: false,
  })
);
app.use(bodyParser.json());
app.use(helmet());

db.connect();

// passport auth initialization
app.use(passport.initialize());
require("./config/passport")(passport);

// implement routes
app.use("/api/users", users);
app.use("/api/applications", applications);

if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "client/build")));
  app.get("*", function (req, res) {
    res.sendFile(path.join(__dirname, "client/build", "index.html"));
  });
}

// open server on port 5000
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
