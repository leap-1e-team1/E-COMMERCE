import jwt, { JwtPayload } from "jsonwebtoken";
import dotenv from "dotenv";
import { Request, Response, NextFunction } from "express"; // Import types for Express

dotenv.config();

interface CustomJwtPayload extends JwtPayload {
  userId: string; // Define the custom payload type if you expect a 'userId'
}

export const authMiddleware = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const token = req.headers.authorization;

  if (!token) {
    return res.status(401).send({ message: "Token missing" });
  }

  const jwtToken = token.split(" ")[1];

  if (!jwtToken) {
    return res.status(401).send({ message: "Token is missing" });
  }

  jwt.verify(jwtToken, process.env.JWT_SECRET as string, (err, decoded) => {
    if (err) {
      return res.status(401).send({ message: err.message });
    } else {
      const payload = decoded as CustomJwtPayload; // Cast to custom payload type
      res.locals.userId = payload.userId;
      next();
    }
  });
};
