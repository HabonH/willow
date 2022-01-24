const express = require("express");
const router = express.Router();
const { authenticateToken } = require("../Helper/authenticate");

/* GET users listing. */
const journalRouter = (db) => {
  router.get("/", authenticateToken, function (req, res, next) {
    // let studentEmail = req.params.email;

    // const studentEmail = req.signedCookies.name;
    const queryString = `SELECT journals.* FROM students
    JOIN journals ON journals.student_id = students.id
    WHERE students.email = $1
    ORDER BY journals.id DESC;`;
    const queryParams = [req.user.email];
    return db
      .query(queryString, queryParams)
      .then((data) => {
        res.json(data.rows);
      })
      .catch((err) => console.error(err));
  });

  router.post("/", authenticateToken, (req, res) => {
    const email = req.user.email;
    const journal_data = req.body;

    // console.log("STUDENT ID-->", student_id);

    // const queryString = `INSERT INTO journals (scale, title, entry, choice, student_id)
    // VALUES
    // ($1, $2, $3, $4, $5);`;
    // const queryParams = [
    //   data.scale,
    //   data.title,
    //   data.description,
    //   data.choice,
    //   userID,
    // ];
    const queryString = `SELECT id FROM students WHERE students.email = $1;`;
    const queryParams = [email];
    return db
      .query(queryString, queryParams)
      .then((data) => {
        const student_id = data.rows[0].id;
        const queryString2 = `INSERT INTO journals (scale, title, entry, choice, student_id)
    VALUES
    ($1, $2, $3, $4, $5);`;
        const queryParams2 = [
          journal_data.scale,
          journal_data.title,
          journal_data.description,
          journal_data.choice,
          student_id,
        ];
        db.query(queryString2, queryParams2).catch((err) => {
          console.log(err);
        });
      })
      .catch((err) => {
        console.log(err);
      });
  });

  return router;
};
module.exports = journalRouter;
