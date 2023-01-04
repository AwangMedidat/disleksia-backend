const express = require("express");
const mongoose = require("mongoose");

const teacherSchema = new mongoose.Schema({
  age: Number,
  genre: String,
  user: { type: mongoose.Schema.Types.ObjectId, ref: "user" },
  course: [{ type: mongoose.Schema.Types.ObjectId, ref: "course" }],
});

const teacherModel = new mongoose.model("teacher", teacherSchema);

module.exports = teacherModel;
