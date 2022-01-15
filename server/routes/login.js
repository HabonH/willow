const express = require("express");
const router = express.Router();
const basicAuth = require("express-basic-auth");
const auth = basicAuth({
  users: {
    "alice12@gmail.com": "password123",
    "meow2021@gmail.com": "password123",
    "md23@gmail.com": "password123",
    "julia123@gmail.com": "password123",
    "tina12@gmail.com": "password123",
    "therapist1@gmail.com": "password123",
  },
});

/* GET users listing. */
const loginRouter = (db) => {
  router.get("/", auth, function (req, res, next) {
    const options = {
      httpOnly: true,
      signed: true,
    };

    if (req.auth.user === "alice12@gmail.com") {
      res
        .cookie("name", "alice12@gmail.com", options)
        .send({ screen: "alice12@gmail.com" });
    } else if (req.auth.user === "meow2021@gmail.com") {
      res
        .cookie("name", "meow2021@gmail.com", options)
        .send({ screen: "meow2021@gmail.com" });
    } else if (req.auth.user === "md23@gmail.com") {
      res
        .cookie("name", "md23@gmail.com", options)
        .send({ screen: "md23@gmail.com" });
    } else if (req.auth.user === "julia123@gmail.com") {
      res
        .cookie("name", "julia123@gmail.com", options)
        .send({ screen: "julia123@gmail.com" });
    } else if (req.auth.user === "tina12@gmail.com") {
      res
        .cookie("name", "tina12@gmail.com", options)
        .send({ screen: "tina12@gmail.com" });
    }
  });

  return router;
};
module.exports = loginRouter;
