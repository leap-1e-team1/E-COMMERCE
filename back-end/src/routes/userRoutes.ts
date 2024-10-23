import { Router } from "express";
import { registerUser } from "../../controllers/userController";

const router = Router();

router.post("/signup", registerUser);

export default router;
