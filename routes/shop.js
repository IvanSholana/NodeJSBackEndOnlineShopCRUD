const { showProduct, showCart } = require("../controllers/shop-controllers");

const shopRoute = require("express").Router();

shopRoute.get("/", showProduct);
shopRoute.get("/cart", showCart);

module.exports = shopRoute;
