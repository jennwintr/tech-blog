const { Post } = require("../models");

const postData = [
  {
    title: "Title I",
    content:
      "Content goes here",
    user_id: 1,
  },
  {
    title: "Title II",
    content: "Content goes here",
    user_id: 2,
  },
  {
    title: "Title III",
    content: "Content goes here",
    user_id: 3,
  },
];

const seedPosts = () => Post.bulkCreate(postData);

module.exports = seedPosts;