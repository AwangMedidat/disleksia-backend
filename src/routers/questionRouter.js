const express = require("express");
const router = new express.Router();
const userModel = require("../models/userModel");
const matterModel = require("../models/matterModel");
const submatterModel = require("../models/submatterModel");
const questionModel = require("../models/questionModel");
require("dotenv").config();

router.put("/editsubMatter/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const resMatter = await questionModel.findOneAndUpdate(
      { _id: id },
      { $set: req.body }
    );
    res.status(200).json(resMatter);
  } catch (e) {
    res.status(500).json(e);
  }
});

router.get("/mineQuestion/:submatterid", async (req, res) => {
  try {
    const id = req.params.submatterid;
    const submatterCourse = await questionModel
      .findOne({ matter: id })
      .populate("matter")
      .populate("user");
    //   const mapel = await mapelModel.find();
    res.status(200).json(submatterCourse);
  } catch (e) {
    res.status(500).json(e);
  }
});

router.get("/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const question = await questionModel
      .findById(id)
      .populate("user")
      .populate("submatter")
      .populate("matter");
    res.status(200).json(question);
  } catch (e) {
    res.status(500).json(e);
  }
});

router.delete("/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const matter = await questionModel.deleteOne({ _id: id });
    res.status(200).json("Deleted Success");
  } catch (e) {
    res.status(500).json(e);
  }
});

router.post("/", async (req, res) => {
  try {
    const newQuestion = new questionModel(req.body);
    const question = await newQuestion.save();
    res.status(200).json(question);
  } catch (e) {
    res.status(500).json(e);
  }
});

module.exports = router;
