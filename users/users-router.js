const router = require("express").Router();

const Users = require("./users-model.js");
const restricted = require("../auth/auth-middleware.js");

router.get("/", (req, res) => {
  Users.findAll().then(users => {
    res.send(users);
  });
});
router.get("/:id", restricted, (req, res) => {
  console.log(req.params.id);
  Users.findById(req.params.id)
    .then(userObj => {
      console.log(userObj);
      res.status(200).json(userObj);
    })
    .catch(err => {
      res.status(500).json({ message: "There was an error." });
    });
});

module.exports = router;
