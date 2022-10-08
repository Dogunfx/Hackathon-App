const { Sequelize, Model, DataTypes } = require("sequelize");
passportLocalSequelize = require("passport-local-sequelize");
const sequelize = require("../db/connection");

// var User = passportLocalSequelize.defineUser(mydb, {
//   favoriteColor: Sequelize.STRING,
// });

// Valid
const User = sequelize.define("User", {
  // Model attributes are defined here
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  password: {
    type: DataTypes.STRING,
    // allowNull defaults to true
  },
  nick: Sequelize.STRING,
  myhash: Sequelize.STRING,
  mysalt: Sequelize.STRING,
});

passportLocalSequelize.attachToUser(User, {
  usernameField: "nick",
  hashField: "myhash",
  saltField: "mysalt",
});

// `sequelize.define` also returns the model
module.exports = User;
