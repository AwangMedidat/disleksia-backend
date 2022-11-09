const express = require("express");
const router = new express.Router();
const mapelModel = require("../models/mapelModel");
const userModel = require("../models/userModel");
require("dotenv").config();

router.get("/", async (req, res) => {
  try {
    // const email = req.params.email;
    const mapel = await mapelModel.find();
    res.status(200).json(mapel);
  } catch (e) {
    res.status(500).json(e);
  }
});

router.get("/user/:id", async (req, res) => {
    try {
      const id = req.params.id;
      const userCourse = await userModel
      .findById(id)
      .populate("course")
    //   const mapel = await mapelModel.find();
      res.status(200).json(userCourse);
    } catch (e) {
      res.status(500).json(e);
    }
  });

router.get("/:id", async (req, res) => {
    try {
      const id = req.params.id;
      const mapel = await mapelModel.findById(id);
      res.status(200).json(mapel);
    } catch (e) {
      res.status(500).json(e);
    }
  });

router.post("/", async (req, res) => {
  try {
    const newCourse = new mapelModel(req.body);
    const course = await newCourse.save();
    res.status(200).json(course);
  } catch (e) {
    res.status(500).json(e);
  }
});




module.exports = router;
