const express = require("express");
const mongoose = require("mongoose");

const dutySchema = new mongoose.Schema({
  activated: Boolean,
  command: String,
  due_date: Date,
  matter: { type: mongoose.Schema.Types.ObjectId, ref: "matter" },
  submatter: { type: mongoose.Schema.Types.ObjectId, ref: "submatter" },
  question: { type: mongoose.Schema.Types.ObjectId, ref: "question" },
  user: { type: mongoose.Schema.Types.ObjectId, ref: "user" },
});

const dutyModel = new mongoose.model("duty", dutySchema);

module.exports = dutyModel;
