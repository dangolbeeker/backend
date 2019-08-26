const db = require("../database/db-config.js");

module.exports = {
  addUser,
  findUser,
  findBy,
  findAll
};

function addUser(user) {
  return db("users")
    .insert(user)
    .then(() => {
      return db("users")
        .where("email", user.email)
        .select("id", "name", "email")
        .first();
    });
}

function findUser(id) {
  return db("users")
    .where({ id })
    .select("id", "name", "email")
    .first();
}

function findBy(filter) {
  return db("users").where(filter);
}

function findAll() {
  return db("users").select("id", "name", "email");
}
