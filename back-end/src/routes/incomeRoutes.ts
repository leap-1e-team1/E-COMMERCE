import { Router } from "express";
import { addIncome } from "../../controllers/incomeController";
import { getIncomes } from "../../controllers/getIncomes";

const incomeRouter = Router();

incomeRouter.post("/income/add", addIncome);
incomeRouter.get("/incomes", getIncomes);

export default incomeRouter;
