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

  if (!name || !price || stock === undefined) {
    return res.status(400).json({ message: "Missing required fields" });
  }

  if (name !== "string" || price !== "number") {
    return res
      .status(400)
      .json({ message: "Invalid data types for name or price" });
  }

  if (stock && Number.isInteger(stock) && stock >= 0) {
    const newProduct = { id: nextId, name, price, stock };
    products.push(newProduct);
    res.status(201).json(newProduct);
  } else {
    res.status(400).json({ message: "Invalid stock value" });
  }
};
