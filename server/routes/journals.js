const express = require("express");
const router = express.Router();

/* GET users listing. */
const journalRouter = (db) => {
  router.get("/:studentID", function (req, res, next) {
    const studentID = req.params.studentID;
    const queryString = `SELECT * FROM journals
    WHERE student_id = $1;`;
    const queryParams = [studentID];
    return db
      .query(queryString, queryParams)
      .then((data) => res.json(data.rows))
      .catch((err) => console.error(err));
  });

  return router;
};
module.exports = journalRouter;
