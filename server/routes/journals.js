const express = require("express");
const router = express.Router();
const { authenticateToken } = require('../Helper/authenticate') 

/* GET users listing. */
const journalRouter = (db) => {
  router.get("/", authenticateToken, function (req, res, next) {
    // let studentEmail = req.params.email;
    console.log("Here===>", req.user);


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

  router.post("/:userID", (req, res) => {
    const userID = req.params.userID;
    const data = req.body;

    const queryString = `INSERT INTO journals (scale, title, entry, choice, student_id)
    VALUES
    ($1, $2, $3, $4, $5);`;
    const queryParams = [
      data.scale,
      data.title,
      data.description,
      data.choice,
      userID,
    ];

    return db.query(queryString, queryParams).catch((err) => {
      console.log(err);
    });
  });

  return router;
};
module.exports = journalRouter;
