const express = require("express");
const router = express.Router();

/* GET users listing. */
const loginRouter = (db) => {
  router.post("/", function (req, res, next) {
    const userEmail = req.body.email;

    console.log(req.body);

    let queryString = "";

    if (req.body.type === "student") {
      queryString = `SELECT * FROM students
      WHERE email = $1`;
    } else {
      queryString = `SELECT * FROM therapists
      WHERE email = $1`;
    }

    const queryParams = [userEmail];
    return db.query(queryString, queryParams).then((data) => {
      if (req.body.password === data.rows[0].password) {
        res.send({ id: data.rows[0].id, email: data.rows[0].email });
      }
    });

    // console.log(users);
  });

  return router;
};
module.exports = loginRouter;
