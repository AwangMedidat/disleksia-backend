const express = require("express");
const mongoose = require("mongoose");

const courseSchema = new mongoose.Schema({
  course_name : String,
  icon: String,
  activated: Boolean,
  level: Number,
  level_name: String
});

const courseModel = new mongoose.model("course", courseSchema)

module.exports = courseModel