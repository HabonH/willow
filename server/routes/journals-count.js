const express = require("express");
const router = express.Router();
const { authenticateToken } = require('../Helper/authenticate') 

/* GET users listing. */
const journalCountRouter = (db) => {
  router.get("/", authenticateToken, (req, res) => {
    // const userID = req.params.userID;
    console.log("HERE ->", req.user.id);

    const queryString = `SELECT COUNT(*) FROM journals
    WHERE student_id = $1;`;
    const queryParams = [req.user.id];

    return db
      .query(queryString, queryParams)
      .then((data) => {
        res.json(data.rows);
      })
      .catch((err) => {
        console.log(err);
      });
  });

  return router;
};
module.exports = journalCountRouter;
