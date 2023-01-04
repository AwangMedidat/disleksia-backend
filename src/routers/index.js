const router = require("express").Router();
const user = require("./userRouter")
const course = require("./mapelRouter")
const matter = require("./matterRouter")
const submatter = require("./submatterRouter")
const student = require("./studentRouter")
const question = require ("./questionRouter")
const duty = require("./dutyRouter")
const teacher = require("./teacherRouter")

router.use("/user", user)
router.use("/course", course)
router.use("/matter", matter)
router.use("/submatter", submatter)
router.use("/student", student)
router.use("/question", question)
router.use("/duty", duty)
router.use("/teacher", teacher)

module.exports = router
