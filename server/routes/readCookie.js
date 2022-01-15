const express = require("express");
const router = express.Router();

const readCookieRouter = () =>
  router.get("/read-cookie", (req, res) => {
    if (req.signedCookies.name === "alice12@gmail.com") {
      res.send({ screen: "alice12@gmail.com" });
    } else if (req.signedCookies.name === "meow2021@gmail.com") {
      res.send({ screen: "meow2021@gmail.com" });
    } else if (req.signedCookies.name === "md23@gmail.com") {
      res.send({ screen: "md23@gmail.com" });
    } else if (req.signedCookies.name === "julia123@gmail.com") {
      res.send({ screen: "julia123@gmail.com" });
    } else if (req.signedCookies.name === "tina12@gmail.com") {
      res.send({ screen: "tina12@gmail.com" });
    } else {
      res.send({ screen: "auth" });
    }

    return router;
  });

module.exports = readCookieRouter;
