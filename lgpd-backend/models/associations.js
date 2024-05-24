import User from "./user.js";
import Teacher from "./teacher.js";
import Evaluation from "./evaluation.js";
import Course from "./course.js";

const associations = () => {
    Course.hasMany(Teacher);
    User.hasMany(Evaluation);
    Course.hasMany(Evaluation);
};

const factory = {
    associations
};

export default factory;