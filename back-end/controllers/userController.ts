import { UserModel } from "../src/database/models/user.model";
import bcrypt from "bcryptjs";

export const registerUser = async (req: any, res: any) => {
  const { firstName, email, password } = req.body;

  if (!email || !password) {
    return res.status(400).json({ message: "Email and password are required" });
  }

  try {
    const existingUser = await UserModel.findOne({ email });
    console.log(existingUser, "exists");

    if (existingUser) {
      return res.status(400).json({ message: "User already exists" });
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    console.log(hashedPassword, "hash");

    const user = new UserModel({
      firstName,
      email,
      password: hashedPassword,
    });
    console.log(user, "user");

    await user.save();
    res.status(201).json({ message: "User created successfully" });
  } catch (error) {
    console.error("Error while registering user:", error);
    res.status(500).json({ message: "Error irj bn medjinu" });
  }
};
