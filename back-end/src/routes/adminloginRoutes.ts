import { Router } from "express";
import { adminLoginController } from "../../controllers/adminLoginController";

const adminLoginRouter = Router();

adminLoginRouter.post("/adminlogin", adminLoginController);

export default adminLoginRouter;
