const router = require("express").Router();

const Users = require("./users-model.js");
const restricted = require("../auth/auth-middleware.js");

router.get("/:id", restricted, (req, res) => {
  console.log(req.params.id);
  Users.findById(req.params.id)
    .then(res => {
      res.status(200).json({ message: "Here you go!" });
    })
    .catch(err => {
      res.status(500).json({ message: "There was an error." });
    });
});

module.exports = router;
