import {Router} from "express";
import {
  getProducts,
  getProduct,
  createProducts,
  updateProducts,
  deleteProducts,
} from "../controllers/product.controller.js";
import { validateSchema } from '../middlewares/validator.middleware.js'
import { productSchema } from "../schemas/product.schema.js";

const router = Router();

router.get("/products", getProducts);

router.get("/products/:id", getProduct);

router.post("/products", validateSchema(productSchema), createProducts);

router.delete("/products/:id", deleteProducts);

router.put("/products/:id", updateProducts);

export default router;
