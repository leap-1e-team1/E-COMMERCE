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
): Promise<void> => {
  const token = req.headers.authorization;

  if (!token) {
    res.status(401).send({ message: "Token missing" });
    return;
  }

  const jwtToken = token.split(" ")[1];

  if (!jwtToken) {
    res.status(401).send({ message: "Token is missing" });
    return;
  }

  jwt.verify(jwtToken, process.env.JWT_SECRET as string, (err, decoded) => {
    if (err) {
      res.status(401).send({ message: err.message });
      return;
    } else {
      const payload = decoded as CustomJwtPayload; // Cast to custom payload type
      res.locals.userId = payload.userId;
      next();
    }
  });
};
