import { Model, Schema, models, model } from "mongoose";

export type UsersModelType = {
  _id: Schema.Types.ObjectId;
  lastName: string;
  firstName: string;
  password: string;
  phoneNumber: string;
  address: string;
  email: string;
  isAdmin: boolean;
  createdAt: Date;
  updatedAt: Date;
};

const UserSchema = new Schema<UsersModelType>({
  lastName: { type: String, required: false },
  firstName: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  phoneNumber: { type: String, required: false },
  address: { type: String, required: false },
  isAdmin: { type: Boolean, default: false },
  createdAt: { type: Date, default: Date.now, required: true, immutable: true },
  updatedAt: { type: Date, default: Date.now, required: true },
});

export const UserModel: Model<UsersModelType> =
  models["Users"] || model<UsersModelType>("Users", UserSchema);
