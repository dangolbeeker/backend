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
    .then(id => {
      const newId = id[0];
      console.log(newId);
      return db("users")
        .where({ id: newId })
        .select("id", "name", "email")
        .first();
    });
  // return findUser(id);
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
