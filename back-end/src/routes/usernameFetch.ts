import { Router } from "express";
import { authMiddleware } from "../../middleware/auth";
import { usernameFetch } from "../../controllers/usernameFetch";

const router = Router();

router.get("/username", authMiddleware, usernameFetch);

export default router;
