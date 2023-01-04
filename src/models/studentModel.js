const express = require("express");
const mongoose = require("mongoose");

const studentSchema = new mongoose.Schema({
  age: Number,
  level: Number,
  nisn: String,
  genre: String,
  user: { type: mongoose.Schema.Types.ObjectId, ref: "user" },
  teacher: [{ type: mongoose.Schema.Types.ObjectId, ref: "teacher" }]
});

const studentModel = new mongoose.model("student", studentSchema);

module.exports = studentModel;
