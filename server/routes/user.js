const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const User = mongoose.model("User");
const reqireLogin = require("../middleware/requireLogin");

router.get("/user/:id", reqireLogin, (req, res) => {
    const id = String(req.params.id);
    console.log(id);
    User.findOne({ _id: id })
        .then((user) => res.send(user))
        .catch((err) => console.log(err));
});

module.exports = router;
