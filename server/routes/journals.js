const express = require("express");
const router = express.Router();

/* GET users listing. */
const journalRouter = (db) => {
  router.get("/user/:email", function (req, res, next) {
    console.log("REQ PARAMS", req.params);
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

  router.post("/:userID", (req, res) => {
    const userID = req.params.userID;
    const data = req.body;

    const queryString = `INSERT INTO journals (scale, title, entry, student_id)
    VALUES
    ($1, $2, $3, $4);`;
    const queryParams = [data.scale, data.title, data.description, userID];

    return db.query(queryString, queryParams).catch((err) => {
      console.log(err);
    });
  });

  return router;
};
module.exports = journalRouter;
