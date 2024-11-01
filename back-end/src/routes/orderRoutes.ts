import express from "express";
import { createOrder, getAllOrders } from "../../controllers/orderController";
import { orderUpdateController } from "../../controllers/orderUpdateIdController";

const router = express.Router();

router.post("/order", createOrder);
router.get("/orders", getAllOrders);
router.get("/order/:id", orderUpdateController);

export default router;
