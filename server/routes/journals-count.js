const express = require("express");
const router = express.Router();

/* GET users listing. */
const journalCountRouter = (db) => {
  router.get("/:userID", (req, res) => {
    const userID = req.params.userID;

    const queryString = `SELECT COUNT(*) FROM journals
    WHERE student_id = $1;`;
    const queryParams = [userID];

    return db
      .query(queryString, queryParams)
      .then((data) => {
        res.json(data.rows);
      })
      .catch((err) => {
        console.log(err);
      });
  });

  return router;
};
module.exports = journalCountRouter;
