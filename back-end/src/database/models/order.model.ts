import { Model, Schema, models, model } from "mongoose";

export type OrderModelType = {
  userId?: Schema.Types.ObjectId;
  productId?: Schema.Types.ObjectId;
  surname: string;
  name: string;
  isPaid: boolean;
  phone: string;
  address: string;
  additionalInfo?: string;
  createdAt: Date;
  updatedAt: Date;
};

const OrderSchema = new Schema<OrderModelType>({
  userId: { type: Schema.Types.ObjectId, required: true, ref: "Users" },
  productId: { type: Schema.Types.ObjectId, required: true, ref: "Products" },
  surname: { type: String, required: true },
  name: { type: String, required: true },
  isPaid: { type: Boolean, required: true, default: false },
  phone: { type: String, required: true },
  address: { type: String, required: true },
  additionalInfo: { type: String, required: false },
  createdAt: { type: Date, default: Date.now, required: true },
  updatedAt: { type: Date, default: Date.now, required: true },
});

export const OrderModel: Model<OrderModelType> =
  models["Order"] || model<OrderModelType>("Order", OrderSchema);
