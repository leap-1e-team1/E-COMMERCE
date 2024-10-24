import { Model, Schema, models, model } from "mongoose";

export type ProductsModelType = {
  _id: String;
  productName: String;
  price: String;
  images: [String];
  createdAt: Date;
  updatedAt: Date;
  description: String;
  barcode: String;
  count: Number;
  color: String;
  size: "S" | "M" | "L" | "XL" | "2XL";
  categoryName: String;
  remainingQuantity: Number;
  Subclass: String;
  type: String;
};

const ProdcutsSchema = new Schema<ProductsModelType>({
  productName: { type: String, required: false },
  description: { type: String, required: false },
  barcode: { type: String, required: false },
  images: [{ type: String, required: true }],
  price: { type: String, required: false },
  remainingQuantity: { type: String, required: false },
  categoryName: { type: String, required: false },
  Subclass: { type: String, required: false },
  color: { type: String, required: false },
  size: {
    type: String,
    enum: ["S", "M", "L", "XL", "2XL"],
    required: true,
  },
  type: { type: String, required: false },
  createdAt: { type: Date, default: Date.now, required: true, immutable: true },
  updatedAt: { type: Date, default: Date.now, required: true },
});

export const ProductsModel: Model<ProductsModelType> =
  models["Products"] || model<ProductsModelType>("Products", ProdcutsSchema);
