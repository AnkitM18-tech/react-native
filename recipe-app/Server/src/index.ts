import dotenv from "dotenv";
import express, { Express } from "express";
import connectToDB from "./db/db";
import cors from "cors";

dotenv.config();

const app: Express = express();
const PORT = process.env.PORT || 5000;

connectToDB();
app.use(cors());
app.use(express.json());

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
