import dotenv from "dotenv";
import express, { Express } from "express";
import cors from "cors";
import connectToDB from "./db/db";
import authRouter from "./routes/auth.route";
import recipeRouter from "./routes/recipe.route";

dotenv.config();

const app: Express = express();
const PORT = process.env.PORT || 5000;

connectToDB();
app.use(cors());
app.use(express.json());

app.use("/api/auth", authRouter);
app.use("/api/recipe", recipeRouter);

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
