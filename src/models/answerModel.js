const express = require("express");
const mongoose = require("mongoose");

const answerSchema = new mongoose.Schema({
  activated: Boolean,
  answer: String,
  submit_date: Date,
  matter: { type: mongoose.Schema.Types.ObjectId, ref: "matter" },
  submatter: { type: mongoose.Schema.Types.ObjectId, ref: "submatter" },
  question: { type: mongoose.Schema.Types.ObjectId, ref: "question" },
  user: { type: mongoose.Schema.Types.ObjectId, ref: "user" },
});

const answerModel = new mongoose.model("answer", answerSchema);

module.exports = answerModel;
