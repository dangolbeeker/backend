const db = require("../database/db-config.js");

module.exports = {
  addUser,
  findUser,
  findBy,
  findAll
};

async function addUser(user) {
  const [id] = await db("users").insert(user);
  return findUser(id);
}

function findUser(id) {
  console.log(id);
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
