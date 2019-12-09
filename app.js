require("dotenv").config();

const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const express = require("express");
const favicon = require("serve-favicon");
const mongoose = require("mongoose");
const logger = require("morgan");
const path = require("path");

const session = require("express-session");
const MongoStore = require("connect-mongo")(session);
const flash = require("connect-flash");

mongoose
  .connect(process.env.MONGODB_URI || "mongodb://localhost/kindheit", {
    useNewUrlParser: true
  })
  .then(x => {
    console.log(
      `Connected to Mongo! Database name: "${x.connections[0].name}"`
    );
  })
  .catch(err => {
    console.error("Error connecting to mongo", err);
  });

const app_name = require("./package.json").name;
const debug = require("debug")(
  `${app_name}:${path.basename(__filename).split(".")[0]}`
);

const app = express();

// Middleware Setup
app.use(logger("dev"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());

// Express View engine setup
app.use(favicon(path.join(__dirname, "public", "images", "favicon.ico")));

app.use(express.static(path.join(__dirname, "/client/build")));

// default value for title local
app.locals.title = "Backend";

// Enable authentication using session + passport
app.use(
  session({
    secret: process.env.SESSION_SECRET,
    resave: true,
    saveUninitialized: true,
    store: new MongoStore({ mongooseConnection: mongoose.connection })
  })
);
app.use(flash());
require("./passport")(app);
/* app.use(passport.initialize()); */
/* app.use(passport.session()); */

// const index = require("./routes/index");
// app.use("/", index);

const authRoutes = require("./routes/auth");
app.use("/api/auth", authRoutes);

const childRoutes = require("./routes/child");
app.use("/child", childRoutes);

const parentRoutes = require("./routes/parents");
app.use("/parent", parentRoutes);

app.use((req, res) => {
  // If no routes match, send them the React HTML.
  res.sendFile(__dirname + "/client/build/index.html");
});

module.exports = app;
