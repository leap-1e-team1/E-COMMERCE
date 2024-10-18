import express from "express";
import cors from "cors";
import { UserModel } from "./database/models/user.model";
import { connectDatabase } from "./database/config";

const app = express();
app.use(express.json());
app.use(cors());

connectDatabase();

app.get("/", async (req, res) => {
  await UserModel.create({
    firstName: "belgutei",
    lastName: "nagaan",
    email: "qwerty",
  });

  const result = await UserModel.findById("6711cf5cc8cd97905fcc2005");

  await UserModel.findByIdAndUpdate("6711cf5cc8cd97905fcc2005", {
    email: "uzkhugerSoliv",
  });

  res.send("success");
});

app.listen(8000, () => {
  console.log("localhost:8000");
});
