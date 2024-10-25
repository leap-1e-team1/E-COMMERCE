import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import userRoutes from "./routes/userRoutes";
import { connectDatabase } from "./database/config";
import productRoutes from "./routes/productRoutes";
import imgRoutes from "./routes/imgRoutes";

import loginRouter from "./routes/loginRoutes";

import nodemailer from "nodemailer";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 8000;

app.use(cors());
app.use(express.json());

app.use(userRoutes);
app.use(loginRouter);
app.use(productRoutes);
app.use(imgRoutes);

const startServer = async () => {
  await connectDatabase();
  app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
  });
};

startServer();
