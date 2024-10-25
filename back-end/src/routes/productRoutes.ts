import { Router } from "express";
import { ProductAdd } from "../../controllers/productController";
import { getProducts } from "../../controllers/getProducts";
import { productDetail } from "../../controllers/productDetail";

const productRoutes = Router();

productRoutes.post("/product", ProductAdd);
productRoutes.get("/product", getProducts);
productRoutes.get("/productDetail/:id", productDetail);

export default productRoutes;
