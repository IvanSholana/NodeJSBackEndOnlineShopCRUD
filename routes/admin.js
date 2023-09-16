const adminRoute = require("express").Router();
const {
  saveProduct,
  showAdminProduct,
  showOrderPage,
  showAddProductPage,
  editProduct,
  deleteProduct,
} = require("../controllers/admin-controllers");

adminRoute.post("/add-product", saveProduct);
adminRoute.get("/add-product", showAddProductPage);
adminRoute.get("/admin-product", showAdminProduct);
adminRoute.get("/order", showOrderPage);
adminRoute.get("/edit-product/:id", editProduct);
adminRoute.get("/delete-product/:id", deleteProduct);

module.exports = adminRoute;
