//Importing packages
const express = require("express");
const app = express();
const mongoose = require("mongoose");
const PORT = 5000;
const { MONGOURI } = require("./config/keys");
const cors = require("cors");

app.use(cors());
//connecting to mongoose
mongoose.connect(MONGOURI, {
  useNewUrlParser: true,
  useCreateIndex: true,
  useFindAndModify: false,
  useUnifiedTopology: true,
});

mongoose.connection.on("connected", () => {
  console.log("Connected to mongo");
});
mongoose.connection.on("error", (err) => {
  console.log("Error connecting ", err);
});

//exposing routes to app
require("./models/schema");
app.use(express.json());
app.use(require("./routes/enrollcourse"));
app.use(require("./routes/auth"));
app.use(require("./routes/domain"));
app.use(require("./routes/author"));
app.use(require("./routes/course"));
app.use(require("./routes/user"));
app.use(require("./routes/syllabus"));
app.use(require("./routes/test"));
//Listening server on PORT
app.listen(PORT, () => {
  console.log("SERVER is running on ", PORT);
});
