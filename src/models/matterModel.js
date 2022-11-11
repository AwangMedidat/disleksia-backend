const express = require("express");
const mongoose = require("mongoose");

const matterSchema = new mongoose.Schema({
  matter_name : String,
  icon: String,
  activated: Boolean,
  color_matter: String,
  course: { type: mongoose.Schema.Types.ObjectId, ref: "course" },
  user: { type: mongoose.Schema.Types.ObjectId, ref: "user" },
});

const matterModel = new mongoose.model("matter", matterSchema)

module.exports = matterModel