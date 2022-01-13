const express = require("express");
const router = express.Router();

/* GET home page. */
const calmingImagesRouter = (db) => {
  router.get("/", function (req, res, next) {
    res.send("This is the calming images route.");
  });
  return router;
};
module.exports = calmingImagesRouter;
