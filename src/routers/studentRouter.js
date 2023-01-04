const express = require("express");
const router = new express.Router();
const mapelModel = require("../models/mapelModel");
const userModel = require("../models/userModel");
const studentModel = require("../models/studentModel");
const answerModel = require("../models/answerModel");

require("dotenv").config();

// router.get("/", async (req, res) => {
//   try {
//     // const email = req.params.email;
//     const mapel = await mapelModel.find();
//     res.status(200).json(mapel);
//   } catch (e) {
//     res.status(500).json(e);
//   }
// });

router.get("/listTeacher/:id", async (req, res) => {
    try {
      const id = req.params.id;
      const studentCourse = await studentModel
      .findById(id)
      .populate("user")
      .populate("teacher")
    //   const mapel = await mapelModel.find();
      res.status(200).json(studentCourse);
    } catch (e) {
      res.status(500).json(e);
    }
  });

router.patch("/addTeacher/:id", async (req, res) => {
    try {
      const { teacher } = req.body;
      const id = req.params.id;
      const student = await studentModel.findById(id);
      student.teacher = teacher
      const newList = await student.save()
      // console.log(newList, '<<< student')
      res.status(200).json(newList);
    } catch (e) {
      res.status(500).json(e);
    }
  });

// router.post("/", async (req, res) => {
//   try {
//     const newCourse = new mapelModel(req.body);
//     const course = await newCourse.save();
//     res.status(200).json(course);
//   } catch (e) {
//     res.status(500).json(e);
//   }
// });

router.post("/answer", async (req, res) => {
  try {
    const newAnswer = new answerModel(req.body);
    const answer = await newAnswer.save();
    res.status(200).json(answer);
  } catch (e) {
    res.status(500).json(e);
  }
});

router.get("/answer/:matterid", async (req, res) => {
  try {
    const id = req.params.matterid;
    const question = await answerModel
      .find({matter: id})
      .populate("user")
      // .populate("submatter")
      // .populate("matter");
    res.status(200).json(question);
  } catch (e) {
    res.status(500).json(e);
  }
});




module.exports = router;
