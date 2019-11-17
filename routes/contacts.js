const express = require("express");

const router = express.Router();

// GET - get user contacts      private
router.get("/", (req, res) => {
  res.json("Get all contacts");
});

// POST - add new contacts      private
router.post("/", (req, res) => {
  res.json("Add new contacts");
});

// PUT - update a contact      private
router.put("/:id", (req, res) => {
  res.json("Update contact");
});

// DELETE - delete a contact      private
router.delete("/:id", (req, res) => {
  res.json("delete");
});

module.exports = router;
