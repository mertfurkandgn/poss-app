const Category = require("../models/Category.js");
const express = require("express");
const router = express.Router();

router.post("/add-category", async (req, res) => {
  try {
    
    for (let i = 0; i < 10; i++) {
        const newCategory = new Category(req.body);
        await newCategory.save(); // Her işlemi sırayla kaydeder.
      }
    
    res.status(200).json("Item added successfully.");
  } catch (error) {
    res.status(400).json(error);
  }
});

module.exports = router;