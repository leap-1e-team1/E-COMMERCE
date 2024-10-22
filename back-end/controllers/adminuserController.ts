import { AdminModel } from "../src/database/models/admin.model";
import bcrypt from "bcryptjs";

export const AdminContoller = async (req: any, res: any) => {
  const { firstName, lastName, email, password } = req.body;

  if (!email || !password) {
    return res.status(400).json({ message: "Email and password are required" });
  }

  try {
    const existingUser = await AdminModel.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: "User already exists" });
    }
    console.log(existingUser);

    const hashedPassword = await bcrypt.hash(password, 10);
    const user = new AdminModel({
      firstName,
      lastName,
      email,
      password: hashedPassword,
    });
    await user.save();
    res.status(201).json({ message: "User created successfully" });
  } catch (error) {
    console.error("Error while registering user:", error);
    res.status(500).json({ message: "Error registering user" });
  }
};
