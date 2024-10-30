import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import userRoutes from "./routes/userRoutes";
import { connectDatabase } from "./database/config";
import productRoutes from "./routes/productRoutes";
import imgRoutes from "./routes/imgRoutes";
import userUpdate from "./routes/userUpdateRoutes";
import orderRoutes from "./routes/orderRoutes";

import loginRouter from "./routes/loginRoutes";

import nodemailer from "nodemailer";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 8000;

app.use(cors());
app.use(express.json());

app.use("/", userRoutes);
app.use("/", loginRouter);
app.use("/", productRoutes);
app.use("/", imgRoutes);
app.use("/", userUpdate);
app.use("/", orderRoutes);

const startServer = async () => {
  await connectDatabase();
  app.listen(PORT, () => {
    console.log(`http://localhost:8000`);
  });
};

startServer();
