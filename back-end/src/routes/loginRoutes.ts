import { Router } from "express";
import { loginController } from "../../controllers/loginController";
import { adminLoginController } from "../../controllers/adminLoginController";

const loginRouter = Router();

const adminLoginRouter = Router();

loginRouter.post("/login", loginController);

adminLoginRouter.post("/adminlogin", adminLoginController);

export default loginRouter;
