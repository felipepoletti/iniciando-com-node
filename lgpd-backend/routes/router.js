import express from "express";

import userController from "./UserController.js";
import teacherController from "./TeacherController.js";
import evaluationController from "./EvaluationController.js";
import courseController from "./CourseController.js";

let router = express.router();

router.get("/", function(req, res) {
    console.log("Oi");
    res.status(200).json({message: "Sucesso"});
});

router.use("/", userController);
router.use("/", teacherController);
router.use("/", evaluationController);
router.use("/", courseController);

export default router;

