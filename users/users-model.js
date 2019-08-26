const db = require("../database/db-config.js");

module.exports = {
  addUser,
  findUser,
  findBy,
  findById
};

async function addUser(user) {
  const [id] = await db("users").insert(user);
  return findUser(id);
}

function findUser(id) {
  return db("users")
    .where({ id })
    .select("id", "name", "email")
    .orderBy("id")
    .first();
}

function findBy(filter) {
  return db("users").where(filter);
}

function findById(id) {
  console.log(id);
  return db("users")
    .where({ id })
    .select("id", "name", "email")
    .first();
}
