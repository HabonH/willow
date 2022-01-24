const express = require("express");
const router = express.Router();
const { authenticateToken } = require("../Helper/authenticate");

/* GET students Journals */
const studentJournalsRouter = (db) => {
  router.get("/:studentId", authenticateToken, function (req, res, next) {
    const queryString = `SELECT journals.* FROM students
    JOIN journals ON journals.student_id = students.id
    WHERE students.id = $1
    ORDER BY journals.id DESC;`;
    console.log("REQ--->", req.params);
    const queryParams = [req.params.studentId];
    return db
      .query(queryString, queryParams)
      .then((data) => {
        res.json(data.rows);
      })
      .catch((err) => console.error(err));
  });

  return router;
};
module.exports = studentJournalsRouter;
