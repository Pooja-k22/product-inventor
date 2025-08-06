const express = require("express");

const productController = require("./controller/productController");

const route = new express.Router();

route.post("/add-prod", productController.productAddController);

route.get("/get-prod", productController.productGetController);

route.delete("/delete-prod/:id", productController.productDeleteController);

route.get("/prod/:id", productController.productGetAController);

route.put('/edit-prod/:id', productController.productEditController)

module.exports = route;
