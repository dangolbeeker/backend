const express = require("express");
const cors = require("cors");
const helmet = require("helmet");

const authenticate = require("../auth/auth-middleware.js");
const authRouter = require("../auth/auth-router.js");

const server = express();

server.use(helmet());
server.use(cors());
server.use(express.json());

server.get("/", (req, res) => {
  res.status(200).json({ testObject: process.env.TEST });
});

server.use("/api/auth", authRouter);
// server.use("/api/user/:id", authenticate);

module.exports = server;
