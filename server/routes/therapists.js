const express = require("express");
const router = express.Router();

/* GET home page. */
const therapistsRouter = (db) => {
  router.get("/", function (req, res, next) {
    res.send("This is the therapists route.");
  });
  return router;
};
module.exports = therapistsRouter;
