import { Request, Response } from "express";
import { ProductsModel } from "../src/database/models/product.model";

export const deleteProduct = async (req: Request, res: Response) => {
  const { selectedProductId } = req.body as { selectedProductId: string[] };

  try {
    const responses = selectedProductId.map(
      async (id) => await ProductsModel.findByIdAndDelete(id)
    );

    await Promise.all(responses);

    res.status(200).send({ message: "Deleted" });
  } catch (error) {}
};
