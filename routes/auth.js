const express = require("express");

const router = express.Router();

// GET - logged in user    private
router.get("/", (req, res) => {
  res.json("Get logged in user");
});

// POST - auth user and get token    public
router.post("/", (req, res) => {
  res.json("Log in user");
});

module.exports = router;
