import express from "express";
import cors from "cors";
import { UserModel } from "./database/models/user.model";
import { connectDatabase } from "./database/config";

const app = express();
app.use(express.json());
app.use(cors());

connectDatabase();

app.post("/", async (req, res) => {
  const { email, password } = req.body;

  await UserModel.create({
    email,
    password,
  });

  // const result = await UserModel.findById("6711cf5cc8cd97905fcc2005");

  // await UserModel.findByIdAndUpdate("6711cf5cc8cd97905fcc2005", {
  //   email: "uzkhugerSoliv",
  // });

  res.send("success");
});

app.listen(8000, () => {
  console.log("http://localhost:8000");
});
