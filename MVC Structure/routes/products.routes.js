import express from "express";
import {
  getAllProducts,
  getProductById,
  createProduct,
  updateProduct,
  deleteProduct,
} from "../controllers/products.controllers.js";

import { validationMiddleware } from "../middleware/products.middleware.js";

const router = express.Router();
router.get("/", getAllProducts);
router.get("/:id", getProductById);
router.post("/", createProduct, validationMiddleware);
router.put("/:id", updateProduct);
router.delete("/:id", deleteProduct);

export default router;
