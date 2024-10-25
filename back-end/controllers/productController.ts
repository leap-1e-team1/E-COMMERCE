import { ProductsModel } from "../src/database/models/product.model";

export const ProductAdd = async (req: any, res: any) => {
  const {
    selectedSizes,
    images,
    productName,
    description,
    barcode,
    price,
    remainingQuantity,
    categoryName,
    Subclass,
    color,
    type,
  } = req.body;

  console.log(
    selectedSizes,
    images,
    productName,
    description,
    barcode,
    price,
    remainingQuantity,
    categoryName,
    Subclass,
    color,
    type
  );

  try {
    const newProduct = await ProductsModel.create({
      sizes: selectedSizes,
      images,
      productName,
      description,
      barcode,
      price,
      remainingQuantity,
      categoryName,
      Subclass,
      color,
      type,
    });

    res.status(201).json({ message: "product created successfully" });
  } catch (error) {
    console.error("Error while registering product:", error);
    res.status(500).json({ message: "Error registering product" });
  }
};
