const express = require("express");
require("../src/db/connection");
const app = express();
const port = process.env.PORT || 3000;
const userModel = require("../src/models/userModel");

app.use(express.json());

app.get("/", async (req, res) => {
  res.send("Hello");
});

app.post("/user/register", async (req, res) => {
  try {
    const user = await userModel.find();
    for (let i = 0; i < user.length; i++) {
      if (req.body.email === user[i].email) {
        res.status(400).json({ msg: "Email Have been Used" });
      }
    }
    const newUser = new userModel(req.body);
    const userNew = await newUser.save();
    res.status(200).json(userNew);
  } catch (e) {
    res.status(500).json(e);
  }
});

app.post("/user/completed/:id", async (req, res) => {
  try {
    const { birth_date, genre, course } = req.body;
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
    }
    const addUser = await user.save();
    res.status(200).json(addUser);
  } catch (e) {
    res.status(500).json(e);
  }
});

app.post("/user/login", async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      res.status(404).json({ msg: "Email or Password must required" });
    } else {
      const user = await userModel.find({email: email});
      if(user.length === 0) throw res.status(404).json({ msg: "User Not Available" })
    //   console.log(user);
      if(user[0].password !== password) res.status(400).json({ msg: "User Not Available" });
      res.status(200).json({
          _id : user[0]._id,
          email : user[0].email,
          profesi: user[0].is_teacher === 1 ? "Guru" : "Murid",
          nama : user[0].full_name,
          access_token: "Token Dummy"
      });
    }
  } catch (e) {
    res.status(500).json(e);
  }
});

app.listen(port, () => {
  console.log(`connection is live at port ${port}`);
});
