const express = require("express");
const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  full_name: {
    type: String,
    required: true,
  },
  call_name : String,
  is_teacher: Number,
  is_student: Number,
  activated: Boolean,
  deleted: Boolean,
  age: Number,
  class: Number,
  email: {
    type: String,
    trim: true,
    lowercase: true,        
    unique: true,
    required: 'Email address is required',
    match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Please fill a valid email address']
  },
  password: String,
  nisn: String,
  genre: String,
  course: []
});

const userModel = new mongoose.model("user", userSchema)

module.exports = userModel