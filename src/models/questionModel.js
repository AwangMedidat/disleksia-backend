const express = require("express");
const mongoose = require("mongoose");

const questionSchema = new mongoose.Schema({
  activated: Boolean,
  question: String,
  is_option: Boolean,
  matter: { type: mongoose.Schema.Types.ObjectId, ref: "matter" },
  submatter: { type: mongoose.Schema.Types.ObjectId, ref: "submatter" },
  user: { type: mongoose.Schema.Types.ObjectId, ref: "user" },
});

const questionModel = new mongoose.model("question", questionSchema);

module.exports = questionModel;
