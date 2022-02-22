const express = require("express");
const router = express.Router();
const { authenticateToken } = require("../Helper/authenticate");

/* GET users listing. */
const studentsRouter = (db) => {
  //get the list of students for specific that therapist
  router.get("/", authenticateToken, function (req, res, next) {
    const queryString = `SELECT students.* FROM students
    JOIN therapists ON therapists.id = students.therapist_id
    WHERE therapists.id = $1;`;
    // therapist id
    const queryParams = [req.user.id];
    return db
      .query(queryString, queryParams)
      .then((data) => {
        res.json(data.rows);
      })
      .catch((err) => console.error(err));
  });

  //get the id of the priamry therapist (if any)
  router.get("/therapist", authenticateToken, function (req, res, next) {
    const queryString = `SELECT therapist_id FROM students
    WHERE id = $1;`;
    // therapist id
    const queryParams = [req.user.id];
    return db
      .query(queryString, queryParams)
      .then((data) => {
        res.json(data.rows);
      })
      .catch((err) => console.error(err));
  });
  //get the therapist info  of the priamry therapist (if any)
  router.get("/therapist-info", authenticateToken, function (req, res, next) {
    const queryString = `SELECT therapists.name, therapist_id FROM students
    JOIN therapists ON therapists.id = students.therapist_id
    WHERE students.id = $1;`;
    // therapist id
    const queryParams = [req.user.id];
    return db
      .query(queryString, queryParams)
      .then((data) => {
        res.json(data.rows);
      })
      .catch((err) => console.error(err));
  });

  // set the primary therapist for a student
  router.post("/", authenticateToken, (req, res) => {
    const therapistId = req.params.id;
    const studentId = req.user.id;

    const queryString = `UPDATE students SET therapist_id = $1 WHERE id = $2;`;
    const queryParams = [therapistId, studentId];
    return db
      .query(queryString, queryParams)
      .then((data) => {
        res.send("saved");
      })
      .catch((err) => {
        console.log(err);
      });
  });

  //set the primary therapist for the studenet ot the id of the therapist
  router.put("/set_therapist", authenticateToken, function (req, res, next) {
    const userID = req.user.id;
    const therapistId = req.body.data.id;

    const queryString = `UPDATE students
    SET therapist_id = $1
    WHERE id = $2;`;
    const queryParams = [therapistId, userID];
    return db
      .query(queryString, queryParams)
      .then((data) => {
        res.send("saved");
      })
      .catch((err) => res.send("error"));
  });

  //if the student removes a therapist then set the id to 0
  router.put("/remove_therapist", authenticateToken, function (req, res, next) {
    const userID = req.user.id;
    const therapistId = req.body.data.id;

    const queryString = `UPDATE students
    SET therapist_id = $1
    WHERE id = $2;`;
    const queryParams = [therapistId, userID];
    return db
      .query(queryString, queryParams)
      .then((data) => {
        res.send("saved");
      })
      .catch((err) => res.send("error"));
  });

  return router;
};
module.exports = studentsRouter;
