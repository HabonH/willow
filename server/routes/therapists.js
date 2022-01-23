const express = require("express");
const router = express.Router();
const { authenticateToken } = require("../Helper/authenticate");

/* GET home page. */
const therapistsRouter = (db) => {
  router.get("/", function (req, res, next) {
    const queryString = "SELECT * FROM therapists;";
    return db
      .query(queryString)
      .then((data) => res.json(data.rows))
      .catch((err) => console.error(err));
  });

  router.get("/profile", authenticateToken, function (req, res, next) {
    const userID = req.user.id;
    const queryString = `SELECT * FROM therapists WHERE
    therapists.id = $1;`;
    const queryParams = [userID];
    return db
      .query(queryString, queryParams)
      .then((data) => {
        res.json(data.rows);
      })
      .catch((err) => console.error(err));
  });

  router.put("/profile", authenticateToken, function (req, res, next) {
    const data = req.body.editData;
    console.log(data);
    const userID = req.user.id;
    const queryString = `UPDATE therapists
    SET name = $1,
        email = $2,
        img = $3,
        phone = $4,
        description = $5,
        title = $6,
        organization_name = $7
    WHERE therapists.id = $8;`;
    const queryParams = [
      data.name,
      data.email,
      data.img,
      data.phone,
      data.description,
      data.title,
      data.organization_name,
      userID,
    ];
    return db
      .query(queryString, queryParams)
      .then((data) => {
        res.send("saved");
      })
      .catch((err) => res.send("error"));
  });
  return router;
};
module.exports = therapistsRouter;
