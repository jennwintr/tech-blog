const { User } = require("../models");

const userData = [
  {
    username: "Jennifer",
    password: "jennifer123",
  },
  {
    username: "Jenn",
    password: "jen123",
  },
  {
    username: "Jenny",
    password: "Jenny123",
  },
];

const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;