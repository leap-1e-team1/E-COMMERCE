import { ProductsModel } from "../src/database/models/product.model";

export const ImageAdd = async (req: any, res: any) => {
  const { images } = req.body;
  console.log({ images });

  try {
    const ress = await ProductsModel.create({ size: "small", images });

    await images.save();
    res.status(201).json({ message: "product created successfully" });
  } catch (error) {
    console.error("Error while registering user:", error);
    res.status(500).json({ message: "Error registering product" });
  }
};
