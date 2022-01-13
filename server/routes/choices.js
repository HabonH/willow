const express = require("express");
const router = express.Router();

/* GET home page. */
const choicesRouter = (db) => {
  router.get("/", function (req, res, next) {
    const queryString = "SELECT * FROM choices;";
    return db
      .query(queryString)
      .then((data) => res.json(data.rows))
      .catch((err) => console.error(err));
  });
  return router;
};
module.exports = choicesRouter;
