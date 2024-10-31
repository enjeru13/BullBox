import Product from "../models/product.model.js";

export const getProducts = async (req, res) => {
  const products = await Product.find();
  res.json(products);
};

export const getProduct = async (req, res) => {
  const product = await Product.findById(req.params.id);
  if (!product)
    return res.status(404).json({message: "producto no encontrado"});
  res.json(product);
};

export const createProducts = async (req, res) => {
  const {name, description, price, image, category} = req.body;

  const newProduct = new Product({
    name,
    description,
    price,
    image,
    category,
  });
  const savedProduct = await newProduct.save();
  res.json(savedProduct);
};

export const updateProducts = async (req, res) => {
  const product = await Product.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  });
  if (!product)
    return res.status(404).json({message: "producto no encontrado"});
  res.json(product);
};

export const deleteProducts = async (req, res) => {
  const product = await Product.findByIdAndDelete(req.params.id);
  if (!product)
    return res.status(404).json({message: "producto no encontrado"});
  return res.sendStatus(204);
};
