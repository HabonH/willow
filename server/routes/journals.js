const express = require("express");
const router = express.Router();

/* GET users listing. */
const journalRouter = (db) => {
  router.get("/", function (req, res, next) {
    const studentEmail = req.signedCookies.name;
    const queryString = `SELECT * FROM students
    WHERE email = $1
    JOIN journals ON student_id = students.id;`;
    const queryParams = [studentEmail];
    return db
      .query(queryString, queryParams)
      .then((data) => {
        res.json(data.rows);
      })
      .catch((err) => console.error(err));
  });

  return router;
};
module.exports = journalRouter;
