import { Model, Schema, models, model } from "mongoose";

export type ProductsModelType = {
  _id: String;
  productName: String;
  price: String;
  image: [String];
  createdAt: Date;
  updatedAt: Date;
  description: String;
  count: Number;
  size: "S" | "M" | "L" | "XL" | "2XL";
  categoryName: String;
};

const ProdcutsSchema = new Schema<ProductsModelType>({
  productName: { type: String, required: false },
  price: { type: String, required: false },
  image: [{ type: String, required: true }],
  size: {
    type: String,
    enum: ["S", "M", "L", "XL", "2XL"],
    required: true,
  },
  createdAt: { type: Date, default: Date.now, required: true, immutable: true },
  updatedAt: { type: Date, default: Date.now, required: true },
});

export const ProductsModel: Model<ProductsModelType> =
  models["Products"] || model<ProductsModelType>("Products", ProdcutsSchema);
