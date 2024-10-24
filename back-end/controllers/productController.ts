import { ProductsModel } from "../src/database/models/product.model";
import jwt from "jsonwebtoken";

export const ProductAdd = async (req: any, res: any) => {
  const { selectedSize, images } = req.body;

  console.log(selectedSize, images);

  try {
    const newProduct = await ProductsModel.create({
      size: selectedSize,
      images,
    });

    res.status(201).json({ message: "product created successfully" });
  } catch (error) {
    console.error("Error while registering user:", error);
    res.status(500).json({ message: "Error registering product" });
  }
};
