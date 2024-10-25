import { ProductsModel } from "../src/database/models/product.model";

export const productDetail = async (req: any, res: any) => {
  const { id } = req.params;

  try {
    const product = await ProductsModel.findById({ _id: id });

    if (!product) {
      return res.status(400).json({ message: "not-found" });
    }
    console.log(product);

    return res.status(200).json({ product });
  } catch (error) {
    console.error("Error during login:", error);
    return res.status(500).json({ message: "Login failed" });
  }
};
