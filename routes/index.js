var express = require("express");

var userModel = require("../models/user");
const connectEnsureLogin = require("connect-ensure-login");

var router = express.Router();

/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("index", { title: "Express" });
});
router.get("/login", function (req, res, next) {
  res.send("Please Login First");
});

router.post(
  "/auth",
  connectEnsureLogin.ensureLoggedIn(),
  function (req, res, next) {
    res.json({
      name: req.body.name,
      email: "This is the email",
    });
  }
);

router.post("/register", function (req, res, next) {
  res.json({
    name: req.session,
    email: "This is the email",
  });
});

module.exports = router;
