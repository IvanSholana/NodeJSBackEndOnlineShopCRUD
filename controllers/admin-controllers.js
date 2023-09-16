const Product = require("../models/admin-product");

const saveProduct = (req, res, next) => {
  console.log(req.body);
  res.redirect("/");
};

const showAdminProduct = (req, res, next) => {
  res.render("admin/adminProduct");
};

const showOrderPage = (req, res, next) => {
  res.render("admin/ordersPage");
};

module.exports = { saveProduct, showAdminProduct, showOrderPage };
