
const router = require("express").Router();

const questions = require("./questions-model.js");




router.get("/", (req, res, next) => {
    res.header({
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*"
    }).status(200).json(questions);
});


module.exports = router;