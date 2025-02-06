const Category = require("../models/Category.js");
const express = require("express");
const router = express.Router();

router.post("/", async (req, res)=>{

    try {
        const newCategory = newCategory(req.body);
        await newCategory.save();
        res.status(200).json("Item added successfully")
    } catch (error) {
        res.status(400).json(error);

    }


});

module.exports = router;