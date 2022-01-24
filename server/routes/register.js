const express = require("express");
const router = express.Router();
const jwt = require("jsonwebtoken");
const Chance = require("chance");

/* GET users listing. */
const registerRouter = (db) => {
  const chance = new Chance();
  router.post("/", function (req, res, next) {
    const userEmail = req.body.email;
    const userPassword = req.body.password;
    const userOrg = req.body.organization;
    const userName = req.body.name;
    const userProfile = req.body.profile;
    const userPhone = req.body.phone;
    const userDescription = req.body.description;
    const userTitle = req.body.title;

    const username = `${chance.animal({
      type: "forest",
    })}${chance.integer({
      min: 0,
      max: 100,
    })}`;

    // will check to see the type of login coming in and set the query accordingly
    const queryString =
      req.body.type === "student"
        ? `INSERT INTO students (email, password, organization_name, username) 
        VALUES 
        ($1, $2, $3, $4)
        RETURNING *;`
        : `INSERT INTO therapists (email, password, organization_name, name, img, phone, description, title)
        VALUES
        ($1, $2, $3, $4, $5, $6, $7, $8)
        RETURNING *; `;

    const queryParams =
      req.body.type === "student"
        ? [userEmail, userPassword, userOrg, username]
        : [
            userEmail,
            userPassword,
            userOrg,
            userName,
            userProfile,
            userPhone,
            userDescription,
            userTitle,
          ];
    return db
      .query(queryString, queryParams)
      .then((data) => {
        const userData = data.rows[0];
        const user = {
          id: userData.id,
          email: userData.email,
          userType: req.body.type,
        };
        const accessToken = jwt.sign(user, process.env.ACCESS_TOKEN_SECRET);
        res.json({ accessToken: accessToken, userType: user.userType });
      })
      .catch(() => res.send("user exists"));
  });

  return router;
};
module.exports = registerRouter;
