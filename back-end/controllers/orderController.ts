import { Request, Response } from "express";
import { OrderModel } from "../src/database/models/order.model";

export const createOrder = async (req: Request, res: Response) => {
  const { surname, name, phone, address, additionalInfo, userId, productId } =
    req.body;

  try {
    const newOrder = new OrderModel({
      userId,
      productId,
      surname,
      name,
      phone,
      address,
      additionalInfo,
    });
    await newOrder.save();
    res.status(201).json(newOrder);
  } catch (error) {
    console.error("Error creating order:", error);
    res.status(500).json({ message: "Error creating order" });
  }
};

export const getAllOrders = async (req: Request, res: Response) => {
  try {
    const orders = await OrderModel.find().populate(["userId", "productId"]);
    res.status(200).json(orders);
  } catch (error) {
    console.error("Error fetching orders:", error);
    res.status(500).json({ message: "Error fetching orders" });
  }
};
