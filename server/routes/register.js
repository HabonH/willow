const express = require("express");
const router = express.Router();

/* GET users listing. */
const registerRouter = (db) => {
  router.post("/", function (req, res, next) {
    const userEmail = req.body.email;
    const userPassword = req.body.password;
    const userOrg = req.body.organization;
    const userName = req.body.name;
    const userProfile = req.body.profile;
    const userPhone = req.body.phone;
    const userDescription = req.body.description;
    const userTitle = req.body.title;

    // will check to see the type of login coming in and set the query accordingly
    const queryString =
      req.body.type === "student"
        ? `INSERT INTO students (email, password, organization_name) 
        VALUES 
        ($1, $2, $3);`
        : `INSERT INTO therapists (email, password, organization_name, name, img, phone, description, title)
        VALUES
        ($1, $2, $3, $4, $5, $6, $7, $8); `;

    console.log(req.body);
    console.log(queryString);
    const queryParams =
      req.body.type === "student"
        ? [userEmail, userPassword, userOrg]
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
        console.log(data.rows);
        if (req.body.password === data.rows[0].password) {
          res.send("user exists");
        }
      })
      .catch(() => res.send("feilds"));
  });

  return router;
};
module.exports = registerRouter;
