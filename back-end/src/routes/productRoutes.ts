import { Router } from "express";
import { ProductAdd } from "../../controllers/productController";
import { getProducts } from "../../controllers/getProducts";
import { productDetail } from "../../controllers/productDetail";
import { searchController } from "../../controllers/search.controller";
import { filterController } from "../../controllers/filter.controller";
import { deleteProduct } from "../../controllers/deleteProduct";
import { updateProduct } from "../../controllers/updateProduct";

const productRoutes = Router();

productRoutes.post("/product", ProductAdd);
productRoutes.get("/product", getProducts);
productRoutes.post("/search", searchController);
productRoutes.post("/filter", filterController);
productRoutes.get("/productDetail/:id", productDetail);
productRoutes.post("/product/delete", deleteProduct);
productRoutes.put("/product/update/:id", updateProduct);

export default productRoutes;
