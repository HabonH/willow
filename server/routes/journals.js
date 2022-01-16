const express = require("express");
const router = express.Router();

/* GET users listing. */
const journalRouter = (db) => {
  router.get("/user/:email", function (req, res, next) {
    let studentEmail = req.params.email;
    // const studentEmail = req.signedCookies.name;
    const queryString = `SELECT journals.* FROM students
    JOIN journals ON journals.student_id = students.id
    WHERE students.email = $1;`;
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
