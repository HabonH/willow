const express = require("express");
const router = express.Router();

/* GET users listing. */
const journalRouter = (db) => {
  router.get("/", function (req, res, next) {
    res.send("Here is the journals route");
  });

  return router;
};
module.exports = journalRouter;
