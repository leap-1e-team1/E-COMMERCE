import { Model, Schema, models, model } from "mongoose";

export type UsersModelType = {
    _id:String;
    productName:String;
    price:String;
    image:[String];
    createdAt: Date;
    updatedAt: Date;
    description:String;
    count:Number;
    size:["s","m","l","x","xl"];
    categoryName:String;
};

const UserSchema = new Schema<UsersModelType>({
    productName: { type: String, required: false },
    price: { type: String, required: false },
    image: [{ type: String, required: true }],
  createdAt: { type: Date, default: Date.now, required: true, immutable: true },
  updatedAt: { type: Date, default: Date.now, required: true },
});

export const UserModel: Model<UsersModelType> =
  models["Users"] || model<UsersModelType>("Users", UserSchema);
