import { Model, Schema, models, model } from "mongoose";

export type UsersModelType = {
  _id: Schema.Types.ObjectId;
  firstName: string;
  lastName: string;
  email: string;
  createdAt: Date;
  updatedAt: Date;
};

const UserSchema = new Schema<UsersModelType>({
  firstName: { type: String, required: false },
  lastName: { type: String, required: false },
  email: { type: String, required: true },
  createdAt: { type: Date, default: Date.now, required: true, immutable: true },
  updatedAt: { type: Date, default: Date.now, required: true },
});

export const UserModel: Model<UsersModelType> =
  models["Users"] || model<UsersModelType>("Users", UserSchema);
