import { OrderModel } from "../src/database/models/order.model";

export const getOrders = async (req: any, res: any): Promise<void> => {
  try {
    const order = await OrderModel.find();

    if (!order.length) {
      return res.status(404).json({ message: "No order found" });
    }

    res.status(200).json(order);
  } catch (error) {
    res.status(500).json({ error: "Internal server error" });
  }
};
