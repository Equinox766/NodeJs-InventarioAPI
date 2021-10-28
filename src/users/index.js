const express = require("express");
const { UsersController } = require("./controller");

const router = express.Router();

module.exports.UsersAPI = (app) => {
  router
    .get("/", UsersController.getUsers) // http://localhost:3000/api/users/
    .get("/:id", UsersController.getUser) // http://localhost:3000/api/users/123
    .post("/", UsersController.createUsers)
  app.use("/api/users", router);
};
