const express = require("express");
const mongoose = require("mongoose");

const resultSchema = new mongoose.Schema({
  result: Number,
  result_value: String,
  matter: { type: mongoose.Schema.Types.ObjectId, ref: "matter" },
  submatter: { type: mongoose.Schema.Types.ObjectId, ref: "submatter" },
  question: { type: mongoose.Schema.Types.ObjectId, ref: "question" },
  user: { type: mongoose.Schema.Types.ObjectId, ref: "user" },
});

const resultModel = new mongoose.model("result", resultSchema);

module.exports = resultModel;
