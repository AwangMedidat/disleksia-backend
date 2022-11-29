const express = require("express");
const router = new express.Router();
const mapelModel = require("../models/mapelModel");
const userModel = require("../models/userModel");
const matterModel = require("../models/matterModel")
require("dotenv").config();

router.put("/editMatter/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const resMatter = await matterModel.findOneAndUpdate({_id : id}, {$set : req.body});
    res.status(200).json(resMatter);
  } catch (e) {
    res.status(500).json(e);
  }
});

router.get("/mineCourse/:userid", async (req, res) => {
    try {
      const id = req.params.userid;
      const matterCourse = await matterModel
      .find({user : id})
      .populate("course")
      .populate("user")
    //   const mapel = await mapelModel.find();
      res.status(200).json(matterCourse);
    } catch (e) {
      res.status(500).json(e);
    }
  });

router.get("/:id", async (req, res) => {
    try {
      const id = req.params.id;
      const matter = await matterModel.findById(id);
      res.status(200).json(matter);
    } catch (e) {
      res.status(500).json(e);
    }
  });

  router.delete("/:id", async (req, res) => {
    try {
      const id = req.params.id;
      const matter = await matterModel.deleteOne({_id : id});
      res.status(200).json("Deleted Success");
    } catch (e) {
      res.status(500).json(e);
    }
  });

router.post("/", async (req, res) => {
  try {
    const newMatter = new matterModel(req.body);
    const matter = await newMatter.save();
    res.status(200).json(matter);
  } catch (e) {
    res.status(500).json(e);
  }
});




module.exports = router;
