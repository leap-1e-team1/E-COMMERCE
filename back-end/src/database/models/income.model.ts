import { Model, Schema, models, model } from "mongoose";
import { UserModel } from "./user.model";
// buyer: { type: mongoose.Types.ObjectId; ref: UserModel };

export type IncomeModelType = {
  _id: Schema.Types.ObjectId;
  order_id: string;
  buyer: Schema.Types.ObjectId;
  payment: string;
  createdAt: Date;
  updatedAt: Date;
};

const IncomeSchema = new Schema<IncomeModelType>({
  order_id: { type: String, required: true },
  buyer: { type: Schema.Types.ObjectId, ref: "Users" },
  payment: { type: String, required: true },
  createdAt: { type: Date, default: Date.now, required: true, immutable: true },
  updatedAt: { type: Date, default: Date.now, required: true },
});

export const IncomeModel: Model<IncomeModelType> =
  models["Income"] || model<IncomeModelType>("Income", IncomeSchema);
