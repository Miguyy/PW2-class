import { type } from "node:os";
import { products } from "../models/products.model.js";

export const getAllProducts = (req, res) => {
  res.json(products);
};

export const getProductById = (req, res) => {
  const id = Number(req.params.id);
  const product = products.find((item) => item.id === id);
  if (!product) {
    return res.status(404).json({ message: "Product not found" });
  }
  res.json(product);
};

export const createProduct = (req, res) => {
  const nextId =
    products.length > 0 ? Math.max(...products.map((p) => p.id)) + 1 : 1;
  const { name, price, stock } = req.body;
  const newProduct = { id: nextId, name, price, stock };
  products.push(newProduct);
  res.status(201).json(newProduct);
};

export const updateProduct = (req, res) => {
  const id = Number(req.params.id);
  const productIndex = products.findIndex((item) => item.id === id);
  if (productIndex === -1) {
    return res.status(404).json({ message: "Product not found" });
  }
  const { name, price, stock } = req.body;
  const updatedProduct = { id, name, price, stock };
  products[productIndex] = updatedProduct;
  res.json(updatedProduct);
};

export const deleteProduct = (req, res) => {
  const id = Number(req.params.id);
  const productIndex = products.findIndex((item) => item.id === id);
  if (productIndex === -1) {
    return res.status(404).json({ message: "Product not found" });
  }
  products.splice(productIndex, 1);
  res.status(204).send();
};
