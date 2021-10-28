const express = require("express");
const debug = require("debug")("app:main");
const { Config } = require("./src/config/index");
const { ProductsAPI } = require("./src/products/index");
const { UsersAPI } = require("./src/users/index");
const { NotFoundAPI, IndexAPI } = require("./src/index/index");

const app = express();

app.use(express.json());

IndexAPI(app);
ProductsAPI(app);
UsersAPI(app);
NotFoundAPI(app);

// MODULOS
app.listen(Config.port, () => {
  debug(`Servidor en corriendo el puerto ${Config.port}`);
});
