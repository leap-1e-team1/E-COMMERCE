import { Router } from "express";
import { registerUser } from "../../controllers/userController";
import { getProducts } from "../../controllers/getProducts";

const router = Router();

router.post("/signup", registerUser);
router.get("/imageavah", getProducts);

export default router;
