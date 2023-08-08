const express = require("express");
const router = express.Router();

// supabase config
const supabase = require("../../services/supabase");

// GET home page.
router.get("/", (req, res, next) => {
  res.render("index", { title: "Classmuse Users Index" });
});

// GET user profiles
router.get("/:handle", async (req, res, next) => {
  const { data, error, status, statusText } = await supabase
    .from("user_profiles")
    .select()
    .eq("handle", req.params.handle.substring(1));
  res.json({
    data: data,
    error: error,
    status: status,
    statusText: statusText,
  });
});

module.exports = router;
