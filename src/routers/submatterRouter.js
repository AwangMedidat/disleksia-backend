const express = require("express");
const router = new express.Router();
const mapelModel = require("../models/mapelModel");
const userModel = require("../models/userModel");
const matterModel = require("../models/matterModel");
const submatterModel = require("../models/submatterModel");
require("dotenv").config();

router.put("/editsubMatter/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const resMatter = await submatterModel.findOneAndUpdate(
      { _id: id },
      { $set: req.body }
    );
    res.status(200).json(resMatter);
  } catch (e) {
    res.status(500).json(e);
  }
});

router.get("/mineMatter/:matterid", async (req, res) => {
  try {
    const id = req.params.matterid;
    const submatterCourse = await submatterModel
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
    const submatter = await submatterModel
      .findById(id)
      .populate("user")
      .populate("matter");
    res.status(200).json(submatter);
  } catch (e) {
    res.status(500).json(e);
  }
});

router.delete("/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const matter = await submatterModel.deleteOne({ _id: id });
    res.status(200).json("Deleted Success");
  } catch (e) {
    res.status(500).json(e);
  }
});

router.post("/", async (req, res) => {
  try {
    const newSubmatter = new submatterModel(req.body);
    const submatter = await newSubmatter.save();
    res.status(200).json(submatter);
  } catch (e) {
    res.status(500).json(e);
  }
});

module.exports = router;
