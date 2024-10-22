import { Request, Response } from "express";
import { ProductsModel } from "../src/database/models/product.model"; // Assuming your Mongoose model is UserModel

export const getProducts = async (req: Request, res: Response) => {
  const { userId } = res.locals; // Assuming userId is stored in res.locals after authentication middleware

  try {
    const user = await ProductsModel.findOne(
      { _id: userId },
      "images size"
    ).exec();

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    const { images, size } = user;
    res.json({
      images,
      size,
    });
  } catch (error) {
    console.error("Error fetching user products:", error);
    res.status(500).json({ message: "Server error" });
  }
};
