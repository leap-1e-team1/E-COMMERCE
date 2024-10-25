import { Router } from "express";
import { authMiddleware } from "../../middleware/auth";
import { userUpdateController } from "../../controllers/userUpdateController";

const router = Router();

router.post("/userUpdate", authMiddleware, userUpdateController);

export default router;
