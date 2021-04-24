//Importing mongoose
const mongoose = require("mongoose");

//defining schema
const userSchema = new mongoose.Schema({
  first_name: {
    type: String,
    required: true,
  },
  last_name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  last_login: {
    type: String,
    required: false,
  },
});

const wishlistSchema = new mongoose.Schema({
  user_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  course_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Course",
    required: true,
  },
});

const userCoursesEnrollmentSchema = new mongoose.Schema({
  user_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  course_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Course",
    required: true,
  },
  date_of_enrollment: {
    type: Date,
    require: true,
  },
  date_of_completion: {
    type: Date,
    require: false,
  },
});

const courseSchema = new mongoose.Schema({
  domain_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Domain",
    require: true,
  },
  author_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Author",
    require: true,
  },
  course_name: {
    type: String,
    require: true,
  },

  course_description: {
    type: String,
    require: true,
  },

  total_enrollments: {
    type: Number,
    require: true,
    default: 0
  },
});

const domainSchema = new mongoose.Schema({
  domain_name: {
    type: String,
    require: true,
  },
  domain_description: {
    type: String,
    require: true,
  },
});

const authorSchema = new mongoose.Schema({
  author_name: {
    type: String,
    require: true,
  },
});

const courseContentSchema = new mongoose.Schema({
  course_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Course",
    require: true,
  },
  syllabus: {
    type: Array,
    require: true,
  },
});

const userTestTakenSchema = new mongoose.Schema({
  registrationId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "UserCourseEnrollment",
    require: true,
  },
  test_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Test",
    require: true,
  },
  test_taken_date: {
    type: Date,
    require: false,
  },
  test_result: {
    type: Number,
    require: false,
  },
});

const testSchema = new mongoose.Schema({
  question: {
    type: Array,
    require: true,
  },
});

const questionSchema = new mongoose.Schema({
  question: {
    type: String,
    require: true,
  },
  correct_answer: {
    type: String,
    require: true,
  },
});

const answerSchema = new mongoose.Schema({
  question_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Question",
    require: true,
  },
  options: {
    type: Array,
    require: true,
  },
});
//giving name to schema
mongoose.model("User", userSchema);
mongoose.model("Course", courseSchema);
mongoose.model("Domain", domainSchema);
mongoose.model("Author", authorSchema);
mongoose.model("CourseContent", courseContentSchema);
mongoose.model("CourseEnrollment", userCoursesEnrollmentSchema);
mongoose.model("TestEnrollment", userTestTakenSchema);
mongoose.model("Wishlist", wishlistSchema);
mongoose.model("Test", testSchema);
mongoose.model("Question", questionSchema);
mongoose.model("Answer", answerSchema);
