let Product = require("../model/product");

exports.getAllProducts = async (req, res) => {
  let category = req.query.category;
  let products;
  try {
    if (category) products = await Product.where({ category: category });
    else products = await Product.find();
  } catch (err) {
    console.log(err);
  }
  if (!products) {
    return res.status(404).json({ message: "No products found!" });
  }

  return res.json({
    data: products,
  });
};

exports.getProductById = async (req, res, next) => {
  let product;
  try {
    product = await Product.findOne({ _id: req.params.id });
  } catch (err) {
    console.log(err);
  }
  if (!product) {
    return res.status(404).json({ message: "No product found" });
  }
  return res.status(201).json({
    data: product,
  });
};

