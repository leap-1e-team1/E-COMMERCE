import { ProductsModel } from "../src/database/models/product.model";

export const ProductAdd = async (req: any, res: any) => {
  const { selectedSize } = req.body;

  try {
    const product = new ProductsModel({
      size: selectedSize,
    });
    await product.save();
    res.status(201).json({ message: "product created successfully" });
  } catch (error) {
    console.error("Error while registering user:", error);
    res.status(500).json({ message: "Error registering product" });
  }
};
