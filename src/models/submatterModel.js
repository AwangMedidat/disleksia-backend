const express = require("express");
const mongoose = require("mongoose");

const submatterSchema = new mongoose.Schema({
  activated: Boolean,
  explain: String,
  video: String,
  matter: { type: mongoose.Schema.Types.ObjectId, ref: "matter" },
  user: { type: mongoose.Schema.Types.ObjectId, ref: "user" },
});

const submatterModel = new mongoose.model("submatter", submatterSchema);

module.exports = submatterModel;
