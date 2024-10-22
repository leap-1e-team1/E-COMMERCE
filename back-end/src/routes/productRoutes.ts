import { Router } from "express";
import { ProductAdd } from "../../controllers/productController";

const productRoutes = Router();

productRoutes.post("/product", ProductAdd);

export default productRoutes;
