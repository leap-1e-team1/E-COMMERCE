import { Router } from "express";
import { ImageAdd } from "../../controllers/ImageContoller";
const imgRoutes = Router();

imgRoutes.post("/images", ImageAdd);

export default imgRoutes;
