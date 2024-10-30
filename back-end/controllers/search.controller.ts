import { Request, Response } from "express";
import { ProductsModel } from "../src/database/models/product.model";

export const searchController = async (req: Request, res: Response) => {
  const { value } = req.body;

  const foundProducts = await ProductsModel.find({
    productName: { $regex: value, $options: "i" },
  });

  res.status(200).send({ foundProducts });
};
