const express = require("express");
require("../src/db/connection");
require('dotenv').config()
const app = express();
const port = process.env.PORT || 3000;
// const userModel = require("../src/models/userModel");
const router = require("./routers/index");
const cors = require('cors')

app.use(express.json());
app.use(cors())
app.use(router)

app.listen(port, () => {
  console.log(`connection is live at port ${port}`);
});
