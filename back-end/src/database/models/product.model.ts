import { Model, Schema, models, model } from "mongoose";

export type ProductsModelType = {
  _id: string;
  productName: string;
  price: string;
  images: string[];
  createdAt: Date;
  updatedAt: Date;
  description: string;
  barcode: string;
  count: number;
  color: string;
  sizes: string[];
  categoryName: string;
  remainingQuantity: number;
  Subclass: string;
  type: string;
};

const ProductsSchema = new Schema<ProductsModelType>({
  productName: { type: String, required: false },
  description: { type: String, required: false },
  barcode: { type: String, required: false },
  images: [{ type: String, required: true }],
  price: { type: String, required: false },
  remainingQuantity: { type: Number, required: false },
  categoryName: { type: String, required: false },
  Subclass: { type: String, required: false },
  color: { type: String, required: false },
  sizes: {
    type: [String],
    enum: ["S", "M", "L", "XL", "2XL"],
    required: true,
  },
  type: { type: String, required: false },
  createdAt: { type: Date, default: Date.now, required: true, immutable: true },
  updatedAt: { type: Date, default: Date.now, required: true },
});

export const ProductsModel: Model<ProductsModelType> =
  models["Products"] || model<ProductsModelType>("Products", ProductsSchema);
