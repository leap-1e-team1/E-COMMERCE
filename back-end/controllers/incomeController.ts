import { IncomeModel } from "../src/database/models/income.model";
export const addIncome = async (req: any, res: any) => {
  const { order_id, buyer, payment } = req.body;
  try {
    const newIncome = await IncomeModel.create({
      order_id: order_id,
      buyer: buyer,
      payment: payment,
    });
    res.status(201).json({ message: "order created successfully" });
  } catch (error) {
    res.status(500).json({ message: "Error registering order" });
  }
};
