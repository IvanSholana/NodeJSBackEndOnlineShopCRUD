const showProduct = (req, res, next) => {
  res.render("shop/shopPage");
};

const addToCart = (req, res, next) => {
  res.redirect("/cart");
};

const showCart = (req, res, next) => {
  res.render("shop/cartPage");
};

module.exports = { showProduct, addToCart, showCart };
