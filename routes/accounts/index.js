const express = require("express");
const router = express.Router();

// routers
const registerRouter = require("./register");
const loginRouter = require("./login");

// supabase config
const supabase = require("../../services/supabase");

// GET home page.
router.get("/", (req, res, next) => {
  res.render("index", { title: "Classmuse Accounts Index" });
});

router.use("/register/", registerRouter);
router.use("/login/", loginRouter);

module.exports = router;
