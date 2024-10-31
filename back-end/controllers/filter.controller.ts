import { Request, Response } from "express";
import { ProductsModel } from "../src/database/models/product.model";

export const filterController = async (req: Request, res: Response) => {
  const { filterValue } = req.body;

  const query = { type: { $in: filterValue } };
  const foundByFilter = await ProductsModel.find(query);

  if (!foundByFilter.length) {
    const foundByFilter = await ProductsModel.find();
    res.status(200).send({ foundByFilter });
    return;
  }

  res.status(200).send({ foundByFilter });
};
