const express = require("express");
const router = express.Router();

/* GET users listing. */
const journalRouter = (db) => {
  router.get("/", function (req, res, next) {
    const queryString = "SELECT * FROM journals;";
    return db
      .query(queryString)
      .then((data) => res.json(data.rows))
      .catch((err) => console.error(err));
  });

  return router;
};
module.exports = journalRouter;
