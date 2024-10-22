import { Model, Schema, models, model } from "mongoose";

export type AdminModelType = {
  _id: Schema.Types.ObjectId;
  firstName: string;
  lastName: string;
  password: string;
  email: string;
  createdAt: Date;
  updatedAt: Date;
};

const AdminSchema = new Schema<AdminModelType>({
  firstName: { type: String, required: false },
  lastName: { type: String, required: false },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  createdAt: { type: Date, default: Date.now, required: true, immutable: true },
  updatedAt: { type: Date, default: Date.now, required: true },
});

export const AdminModel: Model<AdminModelType> =
  models["admin"] || model<AdminModelType>("admin", AdminSchema);
