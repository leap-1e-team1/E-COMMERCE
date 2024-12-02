import { Router } from "express";
import { getOrders } from "../../controllers/getOrders";
const getOrderRoutes = Router();

getOrderRoutes.get("/getorder", getOrders);

export default getOrderRoutes;
