import { Request, Response } from "express";
import { UserModel } from "../src/database/models/user.model";

export const usernameFetch = async (
  req: Request,
  res: Response
): Promise<void> => {
  const { userId } = res.locals;

  const response = await UserModel.findByIdAndUpdate(userId);
  console.log(response);

  res.status(200).send(response);
};
