const express = require("express");
const router = express.Router();

// supabase config
const supabase = require("../../services/supabase");

// GET home page.
router.get("/", (req, res, next) => {
  res.json({ hello: "Register" });
});

// POST email register
router.post("/email", async (req, res, next) => {
  if (req.body.email && req.body.password) {
    const { data, error } = await supabase.auth.signUp({
      email: req.body.email,
      password: req.body.password,
    });
    if (error == null) res.json({ success: true, error: error });
    else res.json({ success: false, error: error });
  } else res.json({ success: false, error: "no data" });
});

module.exports = router;
