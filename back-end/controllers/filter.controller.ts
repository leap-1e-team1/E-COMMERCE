import { Request, Response } from "express";
import { ProductsModel } from "../src/database/models/product.model";

export const filterController = async (req: Request, res: Response) => {
  const { filterValue } = req.body;
  const foundByFilter = await ProductsModel.find({
    type: filterValue,
  });

  res.status(200).send({ foundByFilter });
};
