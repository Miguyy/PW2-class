export const validationMiddleware = (req, res, next) => {
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
