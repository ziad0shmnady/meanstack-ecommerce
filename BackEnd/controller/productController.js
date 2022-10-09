let Product = require("../model/product");

exports.getAllProducts = async (req, res) => {
  let products;
  try {
    products = await Product.find();
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

exports.getProduct = async (req, res) => {
  let category = req.query.cat;
  let brand = req.query.brand;
  let products;
  if (brand) {
    try {
      products = await Product.find({ category: category });
    } catch (err) {
      console.log(err);
    }
    if (!products) {
      return res.status(404).json({ message: "No products found !" });
    }

    let uniqueArr = new Set();
    products.map((item) => {
      uniqueArr.add(item.name.split(" ")[0]);
    });

    let choosenBrandProducts = new Array();
    products.map((item) => {
      if (item.name.split(" ")[0].toLowerCase() === brand.toLowerCase()) {
        choosenBrandProducts.push(item);
      }
    });

    return res.status(201).render(`viewAllProduct`, {
      title: "Products",
      user: req.user,
      choosenBrandProducts,
      cat: category,
      uniqueArr,
    });
  } else {
    let category = req.query.cat;
    let products;
    try {
      products = await Product.find({ category: category });
    } catch (err) {
      console.log(err);
    }
    if (!products) {
      return res.status(404).json({ message: "No products found !" });
    }

    let uniqueArr = new Set();
    products.map((item) => {
      uniqueArr.add(item.name.split(" ")[0]);
    });

    return res.status(201).render(`viewAllProduct`, {
      title: "Products",
      user: req.user,
      arr: products,
      cat: category,
      uniqueArr,
    });
  }
};

exports.addProduct = async (req, res, next) => {
  const name = req.body.name;
  const category = req.body.category;
  const image = req.body.image;
  const price = req.body.price;
  let product;
  try {
    product = new Product({
      name: name,
      category: category,
      price: price,
      image: image,
    });
    await product.save();
  } catch (err) {
    console.log(err);
  }
  if (!product) {
    return res.status(500).json({ message: "unable To add" });
  }
  return res.status(201).json({ product });
};
