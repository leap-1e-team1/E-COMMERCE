import { Request, Response } from "express";
import { UserModel } from "../src/database/models/user.model";

export const usernameFetch = async (
  req: Request,
  res: Response
): Promise<void> => {
  const { id } = req.params;
  console.log(id);
  try {
    const response = await UserModel.findById(id);
    res.status(200).send(response);
  } catch (error) {
    console.log(error);
    res.status(500).send("Error fetching user");
  }
};
