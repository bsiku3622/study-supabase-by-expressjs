const createError = require("http-errors");
const express = require("express");
const path = require("path");
const cookieParser = require("cookie-parser");
const logger = require("morgan");

const indexRouter = require("./routes/index");
const userRouter = require("./routes/users/index");
const accountsRouter = require("./routes/accounts/index");

const app = express();

// dotenv config
require("dotenv").config({ path: ".env" });

// const supabase = require("../../services/supabase");

// view engine setup
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "pug");

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

app.use("/", indexRouter);
app.use("/users/", userRouter);
app.use("/accounts/", accountsRouter);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  const error = req.app.get("env") === "development" ? err : {};
  res.json({
    message: err.message,
    statue: err.statue || 500,
    stack: error.stack,
  });
});

module.exports = app;
