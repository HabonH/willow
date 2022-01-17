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
    if (req.auth.user === "alice12@gmail.com") {
      res.send({ id: "1", email: "alice12@gmail.com" });
    } else if (req.auth.user === "meow2021@gmail.com") {
      res.send({ id: "2", email: "meow2021@gmail.com" });
    } else if (req.auth.user === "md23@gmail.com") {
      res.send({ id: "3", email: "md23@gmail.com" });
    } else if (req.auth.user === "julia123@gmail.com") {
      res.send({ id: "4", email: "julia123@gmail.com" });
    } else if (req.auth.user === "tina12@gmail.com") {
      res.send({ id: "5", email: "tina12@gmail.com" });
    }
  });

  return router;
};
module.exports = loginRouter;
