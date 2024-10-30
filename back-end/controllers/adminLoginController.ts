import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import { UserModel } from "../src/database/models/user.model";

const SECRET_KEY = process.env.JWT_SECRET as string;

export const adminLoginController = async (req: any, res: any) => {
  const { email, password } = req.body;

  try {
    const user = await UserModel.findOne({ email });

    if (!user) {
      return res.status(400).json({ message: "Бүртгэлгүй байна" });
    }

    const isPasswordValid = await bcrypt.compare(password, user.password);

    if (!isPasswordValid) {
      return res.status(400).json({ message: "Нууц үг таарахгүй байна" });
    }

    if (!user.isAdmin) {
      return res.status(400).json({ message: "admin bish bna" });
    }
    const token = jwt.sign(
      {
        userId: user._id,
        email: user.email,
        username: user.firstName,
      },
      SECRET_KEY,
      { expiresIn: "30d" }
    );

    return res.status(200).json({ message: "Амжилттай нэвтэрлээ", token });
  } catch (error) {
    console.error("Error during login:", error);
    return res.status(500).json({ message: "Login failed" });
  }
};
