import { ProductsModel } from "../src/database/models/product.model";

export const getProducts = async (req: any, res: any): Promise<void> => {
  try {

    const product = await ProductsModel.find();

    if (!product.length) {
      return res.status(404).json({ message: "No product found" });
    }

    res.status(200).json(product);

  } catch (error) {
    res.status(500).json({ error: "Internal server error" });
  }
};
