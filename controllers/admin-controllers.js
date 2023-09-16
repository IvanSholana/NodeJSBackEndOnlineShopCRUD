const Product = require("../models/admin-product");

const saveProduct = (req, res, next) => {
  const { title, imgURL, description, price } = req.body;
  const newProduct = new Product(title, imgURL, description, price);
  newProduct.save();
  res.redirect("/");
};

const showAdminProduct = (req, res, next) => {
  res.render("admin/adminProduct");
};

const showOrderPage = (req, res, next) => {
  res.render("admin/ordersPage");
};

module.exports = { saveProduct, showAdminProduct, showOrderPage };
