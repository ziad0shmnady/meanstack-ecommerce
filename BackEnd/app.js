let express = require("express");
const mongoose = require("mongoose");
let bodyParser = require("body-parser");
const { port, database } = require("./config/config");
const productController = require("./controller/productController");

let app = express();

// parse application/json
app.use(bodyParser.json());
//create mongodb
mongoose
  .connect(database, { useNewUrlParser: true })
  .then(() => console.log("Database connected!"))
  .catch((err) => console.log(err));

//Middleware and Static files
app.use(express.static("public")); // we can access any file in the public folder
app.use(express.urlencoded({ extended: false })); // so we can access the data coming from the input value

app.get("/product", productController.getAllProducts);
app.get("/product/:id", productController.getProductById);

app.listen(port, () => {
  console.log(`conected with port ${port}`);
});
