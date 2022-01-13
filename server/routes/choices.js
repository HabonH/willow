const express = require("express");
const router = express.Router();

/* GET home page. */
const choicesRouter = (db) => {
  router.get("/", function (req, res, next) {
    res.send("This is the choices route.");
  });
  return router;
};
module.exports = choicesRouter;
