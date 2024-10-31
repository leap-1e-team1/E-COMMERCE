// database/models/order.model.ts
import { Model, Schema, models, model, Document } from "mongoose";

export type OrderModelType = Document & {
  surname: string;
  name: string;
  phone: string;
  address: string;
  additionalInfo: string;
  createdAt: Date;
  updatedAt: Date;
};

const OrderSchema = new Schema<OrderModelType>({
  surname: { type: String, required: true },
  name: { type: String, required: true },
  phone: { type: String, required: true },
  address: { type: String, required: true },
  additionalInfo: { type: String, required: false },
  createdAt: { type: Date, default: Date.now, required: true },
  updatedAt: { type: Date, default: Date.now, required: true },
});

export const OrderModel =
  models["Order"] || model<OrderModelType>("Order", OrderSchema);
