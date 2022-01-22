const express = require("express");
const router = express.Router();

/* GET users listing. */
const loginRouter = (db) => {
  router.post("/", function (req, res, next) {
    const userEmail = req.body.email;

    // will check to see the type of login coming in and set the query accordingly
    const queryString =
      req.body.type === "student"
        ? `SELECT * FROM students
    WHERE email = $1;`
        : `SELECT * FROM therapists
    WHERE email = $1;`;

    const queryParams = [userEmail];
    return db
      .query(queryString, queryParams)
      .then((data) => {
        console.log(data.rows);
        if (req.body.password === data.rows[0].password) {
          res.send({
            id: data.rows[0].id,
            email: data.rows[0].email,
            userType: req.body.type,
          });
        } else {
          res.send("invalid");
        }
      })
      .catch((err) => res.send("no email"));
  });

  return router;
};
module.exports = loginRouter;
