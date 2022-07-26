/*
|--------------------------------------------------------------------------
| api.js -- server routes
|--------------------------------------------------------------------------
|
| This file defines the routes for your server.
|
*/

const MY_NAME = "KevinCao";

let data = {
  stories: [
    { _id: 0, creator_name: "Wu", content: "Nothing, fine." },
    { _id: 1, creator_name: "Li", content: "It's a nice day." },
  ],
  comments: [
    { _id: 0, creator_name: "Wang", parent: 0, content: "wang! wang!" },
    { _id: 0, creator_name: "Wu", parent: 0, content: "Oh, lovely dog." },
  ],
};

const express = require("express");

const router = express.Router();

router.get("/test", (req, res) => {
  res.send({ message: "Wow I made my first API in its own file!" });
});

router.get("/stories", (req, res) => {
  res.send(data.stories);
});

router.get("/comment", (req, res) => {
  let filterComments = data.comments.filter((item) => {
    return item.parent == req.query.parent;
  });
  res.send(filterComments);
});

router.post("/story", (req, res) => {
  const newStory = {
    _id: data.stories.length,
    creator_name: MY_NAME,
    content: req.body.content,
  };

  data.stories.push(newStory);
  res.send(newStory);
});

router.post("/comment", (req, res) => {
  const newComment = {
    _id: data.comments.length,
    creator_name: MY_NAME,
    parent: req.body.parent,
    content: req.body.content,
  };

  data.comments.push(newComment);
  res.send(newComment);
});

router.all("*", (req, res) => {
  console.log(`API route not found:${req.method} ${req.url}`);
  res.status(404).send({ message: "API Route not found" });
});

module.exports = router;
