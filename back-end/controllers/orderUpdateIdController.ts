import { Request, Response } from "express";
import { OrderModel } from "../src/database/models/order.model";

export const orderUpdateController = async (
  req: Request,
  res: Response
): Promise<void> => {
  const { id } = req.params;
  try {
    const response = await OrderModel.findByIdAndUpdate(id, {
      isPaid: true,
    });
    res.status(200).send(`Paid succesfully ${response}`);
  } catch (error) {
    res.status(500).send("Error order update");
  }
};
