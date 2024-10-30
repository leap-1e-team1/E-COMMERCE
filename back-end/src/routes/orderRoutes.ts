// routes/orderRoutes.ts
import express, { Request, Response } from "express";
import { OrderModel, OrderModelType } from "../database/models/order.model";

const router = express.Router();

// Create Order
router.post("/order", async (req: Request, res: Response) => {
  const { surname, name, phone, address, additionalInfo } = req.body;

  try {
    const newOrder: OrderModelType = new OrderModel({
      surname,
      name,
      phone,
      address,
      additionalInfo,
    });
    await newOrder.save(); // Now TypeScript should recognize the save method
    res.status(201).json(newOrder);
  } catch (error) {
    console.error("Error creating order:", error);
    res.status(500).json({ message: "Error creating order" });
  }
});

// Get all Orders
router.get("/orders", async (req: Request, res: Response) => {
  try {
    const orders = await OrderModel.find();
    res.status(200).json(orders);
  } catch (error) {
    console.error("Error fetching orders:", error);
    res.status(500).json({ message: "Error fetching orders" });
  }
});

export default router;
