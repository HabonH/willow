const express = require("express");
const router = express.Router();

/* GET home page. */
const emojisRouter = (db) => {
  router.get("/", function (req, res, next) {
    res.send("This is the emojis route.");
  });
  return router;
};
module.exports = emojisRouter;
