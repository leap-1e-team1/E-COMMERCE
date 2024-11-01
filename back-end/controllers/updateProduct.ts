import { ProductsModel } from "../src/database/models/product.model";

export const updateProduct = async (req: any, res: any) => {
  const { id } = req.params;
  const {
    selectedSizes,
    images,
    productName,
    description,
    price,
    barcode,
    remainingQuantity,
    categoryName,
    Subclass,
    color,
    type,
  } = req.body;
  try {
    const product = await ProductsModel.findByIdAndUpdate(id, {
      sizes: selectedSizes,
      images: images,
      productName: productName,
      description: description,
      price: price,
      barcode: barcode,
      remainingQuantity: remainingQuantity,
      categoryName: categoryName,
      Subclass: Subclass,
      color: color,
      type: type,
    });
    res.status(201).json({ message: "product edited sssuccessfully" });
  } catch (error) {
    console.error("Error while editing product:", error);
    res.status(500).json({ message: "Error editing product" });
  }
};
