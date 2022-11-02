const express = require("express");
const router = new express.Router();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken")
const userModel = require("../models/userModel");
require('dotenv').config()

router.get("/:email", async (req, res) => {
  try {
    const email = req.params.email
    const user = await userModel.find({email : email});
    res.status(200).json({
        id : user[0]._id,
        email: user[0].email,
        nama : user[0].full_name
    });
  } catch (e) {
    res.status(500).json(e);
  }
});

router.post("/register", async (req, res) => {
  try {
    const user = await userModel.find();
    for (let i = 0; i < user.length; i++) {
      if (req.body.email === user[i].email) {
        res.status(400).json({ msg: "Email Have been Used" });
      }
    }
    const password = await bcrypt.hash(req.body.password, 10);
    req.body.password = password;
    const newUser = new userModel(req.body);
    const userNew = await newUser.save();
    res.status(200).json(userNew);
  } catch (e) {
    res.status(500).json(e);
  }
});

router.post("/completed/:id", async (req, res) => {
  try {
    const { birth_date, genre, course, nisn, level } = req.body;
    const id = req.params.id;
    const user = await userModel.findById(id);
    const nowDate = new Date();
    const tglLahir = new Date(birth_date);
    const selisih =
      Date.parse(nowDate.toGMTString()) - Date.parse(tglLahir.toGMTString());
    const umur = Math.round(selisih / (1000 * 60 * 60 * 24 * 365));
    if (user.is_teacher === 1) {
      user.age = umur;
      user.genre = genre;
      user.course = course;
    } else {
      user.age = umur;
      user.genre = genre;
      user.nisn = nisn;
      user.level = level;
    }
    const addUser = await user.save();
    res.status(200).json(addUser);
  } catch (e) {
    res.status(500).json(e);
  }
});

router.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      res.status(404).json({ msg: "Email or Password must required" });
    } else {
      const user = await userModel.find({ email: email });
      if (user.length === 0)
        throw res.status(404).json({ msg: "User Not Available" });
      const comparePassword = await bcrypt.compare(password, user[0].password);
      const token = await jwt.sign({
        name: user[0].full_name,
        email: user[0].email,
        password: user[0].password
      }, process.env.JWT_KEY)
      if (!comparePassword) res.status(400).json({ msg: "User Not Available" });
      res.status(200).json({
        _id: user[0]._id,
        email: user[0].email,
        profesi: user[0].is_teacher === 1 ? "Guru" : "Murid",
        nama: user[0].full_name,
        token: token,
      });
    }
  } catch (e) {
    res.status(500).json(e);
  }
});

module.exports = router;
