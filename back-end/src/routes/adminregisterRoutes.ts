import { Router } from "express";
import { AdminContoller } from "../../controllers/adminuserController";

const adminRoutes = Router();

adminRoutes.post("/signup", AdminContoller);

export default adminRoutes;
