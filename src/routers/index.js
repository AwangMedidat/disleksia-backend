const router = require("express").Router();
const user = require("./userRouter")
const course = require("./mapelRouter")
const matter = require("./matterRouter")

router.use("/user", user)
router.use("/course", course)
router.use("/matter", matter)

module.exports = router
