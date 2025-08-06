const mongoose = require("mongoose");

const productsSchema = new mongoose.Schema({
  productname: {
    type: String,
    required: true,
  },
  productId: {
    type: String,
    required: true,
    // unique:true
  },
  price: {
    type: Number,
    required: true,
  },
  quantityinStock: {
    type: Number,
    required: true,
  },
  category: {
    type: String,
    required: true,
  },
});

const products = mongoose.model("products", productsSchema);

module.exports = products;
