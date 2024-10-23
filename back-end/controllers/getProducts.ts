import { ProductsModel } from "../src/database/models/product.model";

export const getProducts = async (req: any, res: any): Promise<void> => {
  try {
    const images = await ProductsModel.find();

    if (!images.length) {
      return res.status(404).json({ message: "No images found" });
    }

    res.status(200).json(images);
  } catch (error) {
    res.status(500).json({ error: "Internal server error" });
  }
};
