const express = require("express");
const { ProductsController } = require("../products/controller");

const router = express.Router();

module.exports.ProductsAPI = (app) => {
  router
    .get("/", ProductsController.getProducts) // http://localhost:3000/api/products/
    .get("/report", ProductsController.generateReport)
    .get("/:id", ProductsController.getProduct) // http://localhost:3000/api/products/123
    .post("/", ProductsController.createProduct);
  app.use("/api/products", router);
};
