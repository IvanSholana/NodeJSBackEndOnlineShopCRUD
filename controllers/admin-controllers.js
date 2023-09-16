const Product = require("../models/admin-product");

const saveProduct = async (req, res, next) => {
  const { title, imgURL, description, price } = req.body;
  let id = await Product.findLength();
  const newProduct = new Product(id, title, imgURL, description, price);
  newProduct.save();
  res.redirect("/");
};

const showAdminProduct = async (req, res, next) => {
  res.render("admin/adminPage", {
    title: "admin product",
    product: await Product.fetchAll(),
  });
};

const showAddProductPage = (req, res, next) => {
  res.render("admin/addProduct", { title: "add Product" });
};

const showOrderPage = (req, res, next) => {
  res.render("admin/ordersPage");
};

const editProduct = async (req, res, next) => {
  let data = await Product.fetchAll();
  data = data.filter((e) => data.id == req.params.id);

  res.render("admin/editProduct", {
    titleValue: data[0].title,
    imgValue: data[0].imgURL,
    descValue: data[0].description,
    priceValue: data[0].price,
  });
};

const deleteProduct = async (req, res, next) => {
  await Product.deleteData(req.params.id);
  res.redirect("/admin/admin-product");
};

module.exports = {
  saveProduct,
  showAdminProduct,
  showOrderPage,
  showAddProductPage,
  editProduct,
  deleteProduct,
};
