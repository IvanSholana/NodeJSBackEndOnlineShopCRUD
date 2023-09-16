const express = require("express");
const bodyParser = require("body-parser");
const handleBars = require("express-handlebars");
const adminRoute = require("./routes/admin");
const shopRoute = require("./routes/shop");

const app = express();

app.engine("handlebars", handleBars.engine({ defaultLayout: "main" }));
app.set("view engine", "handlebars");
app.set("views", "views");

app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: false }));

app.use("/admin", adminRoute);
app.use("/", shopRoute);

app.listen(5000, () => console.log("Listening on Port 5000"));
