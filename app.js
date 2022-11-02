const express = require("express");
require("./src/db/connection");
require('dotenv').config()
const app = express();
const port = process.env.PORT || 3000;
// const userModel = require("../src/models/userModel");
const router = require("./src/routers/index");
const cors = require('cors')

app.use(express.json());
app.use(cors())
app.use(router)

router.get("/", async (req, res) => {
  try {
    res.status(200).json("Sukses");
  } catch (e) {
    res.status(500).json(e);
  }
});

app.listen(port, () => {
  console.log(`connection is live at port ${port}`);
});
