const { Sequelize } = require("sequelize");

const sequelize = new Sequelize({
  database: "d3kj4onkkh0en4",
  username: "ofxjivegxtyefu",
  password: "c76504d5f162a14888165b4112bb804742238034a3e9826e327bd03cbb89c509",
  host: "ec2-3-223-169-166.compute-1.amazonaws.com",
  port: 5432,
  dialect: "postgres",
  dialectOptions: {
    ssl: {
      require: true, // This will help you. But you will see nwe error
      rejectUnauthorized: false, // This line will fix new error
    },
  },
});

const conn = async () => {
  try {
    await sequelize.authenticate();
    console.log("Connection has been established successfully.");
  } catch (error) {
    console.error("Unable to connect to the database:", error);
  }
};

conn();

module.exports = sequelize;
