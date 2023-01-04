const express = require("express");
const mongoose = require("mongoose");

const dutyStudentSchema = new mongoose.Schema({
  activated: Boolean,
  url_file: String,
  submit_date: Date,
  matter: { type: mongoose.Schema.Types.ObjectId, ref: "matter" },
  submatter: { type: mongoose.Schema.Types.ObjectId, ref: "submatter" },
  question: { type: mongoose.Schema.Types.ObjectId, ref: "question" },
  duty: { type: mongoose.Schema.Types.ObjectId, ref: "duty" },
  user: { type: mongoose.Schema.Types.ObjectId, ref: "user" },
});

const dutyStudentModel = new mongoose.model("duty_student", dutyStudentSchema);

module.exports = dutyStudentModel;
