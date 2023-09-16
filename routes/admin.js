const adminRoute = require("express").Router();
const {
  saveProduct,
  showAdminProduct,
  showOrderPage,
} = require("../controllers/admin-controllers");

adminRoute.post("/add-product", saveProduct);
adminRoute.get("/admin-product", showAdminProduct);
adminRoute.get("/order", showOrderPage);

module.exports = adminRoute;
