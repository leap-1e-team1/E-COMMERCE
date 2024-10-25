import { Request, Response } from "express";
import { UserModel } from "../src/database/models/user.model";

export const userUpdateController = async (
  req: Request,
  res: Response
): Promise<void> => {
  const { userId } = res.locals;

  const { lastName, phoneNumber, address, firstName, email } = req.body;

  const response = await UserModel.findByIdAndUpdate(
    userId,
    { lastName, phoneNumber, address, firstName, email },
    { new: true }
  );
  res.send("SUCCESS");
};
