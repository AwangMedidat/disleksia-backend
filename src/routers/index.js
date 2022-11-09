const router = require("express").Router();
const user = require("./userRouter")
const course = require("./mapelRouter")

router.use("/user", user)
router.use("/course", course)

module.exports = router
