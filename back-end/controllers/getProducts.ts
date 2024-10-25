import { ProductsModel } from "../src/database/models/product.model";

export const getProducts = async (req: any, res: any): Promise<void> => {
  try {
    const products = await ProductsModel.find({}, "productName price images");

    if (!products.length) {
      return res.status(404).json({ message: "No products found" });
    }

    res.status(200).json(products);
  } catch (error) {
    res.status(500).json({ error: "Internal server error" });
  }
};
