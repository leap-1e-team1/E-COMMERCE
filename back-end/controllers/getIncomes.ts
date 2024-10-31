import { IncomeModel } from "../src/database/models/income.model";

export const getIncomes = async (req: any, res: any): Promise<void> => {
  try {
    const income = await IncomeModel.find().populate("buyer");

    if (!income.length) {
      return res.status(404).json({ message: "No income found" });
    }
    res.status(200).json(income);
  } catch (error) {
    res.status(500).json({ error: "Internal server error" });
  }
};
