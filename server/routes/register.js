const express = require("express");
const router = express.Router();

/* GET users listing. */
const registerRouter = (db) => {
  router.get("/", function (req, res, next) {
    res.send("this is the register route");
  });

  return router;
};
module.exports = registerRouter;
