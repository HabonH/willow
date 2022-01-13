require("dotenv").config();
const express = require("express");
const path = require("path");
const cookieParser = require("cookie-parser");
const logger = require("morgan");
const cors = require("cors");

// this will be how we connect the server to our DB
// and then we pass the db variable to our route functions
const { Pool } = require("pg");
const dbParams = require("./lib/db.js");
const db = new Pool(dbParams);
db.connect();

const indexRouter = require("./routes/index");
const usersRouter = require("./routes/users");
const journalRouter = require("./routes/journals");
const emojisRouter = require("./routes/emojis");
const calmingImagesRouter = require("./routes/calming_images");
const therapistsRouter = require("./routes/therapists");
const choicesRouter = require("./routes/choices");

const app = express();

app.use(cors());
app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

app.use("/", indexRouter);
app.use("/users", usersRouter);
app.use("/journals", journalRouter(db));
app.use("/emojis", emojisRouter(db));
app.use("/calm-images", calmingImagesRouter(db));
app.use("/therapists", therapistsRouter(db));
app.use("/choices", choicesRouter(db));

module.exports = app;
