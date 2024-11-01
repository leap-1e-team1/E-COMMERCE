import express from "express";
import { createOrder, getAllOrders } from "../../controllers/orderController";

const router = express.Router();

router.post("/order", createOrder);
router.get("/orders", getAllOrders);

export default router;
