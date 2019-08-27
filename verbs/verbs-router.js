const router = require("express").Router();

const Verbs = require("./verbs-model.js");
const restricted = require("../auth/auth-middleware.js");

router.get("/", restricted, (req, res) => {
  Verbs.findAll().then(verbs => {
    res.send(verbs);
  });
});

module.exports = router;
