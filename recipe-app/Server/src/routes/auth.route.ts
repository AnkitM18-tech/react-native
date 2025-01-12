import express, { Request, Response } from "express";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import User from "../models/User.model";

const router = express.Router();

router.post("/register", async (req: Request, res: Response) => {
  try {
    const { email, password } = req.body;
    const isExistingUser = await User.findOne({ email });

    if (isExistingUser) {
      res.status(400).json({
        success: false,
        message: "User already exists. Try with different email",
      });
    }
    const hashPassword = await bcrypt.hash(password, 12);
    const newUser = new User({ email, password: hashPassword });
    await newUser.save();

    res
      .status(201)
      .json({ success: true, message: "User created successfully" });
  } catch (error: any) {
    console.log(error);
    res.status(500).json({ success: false, message: "Something went wrong" });
  }
});

router.post("/login", async (req: Request, res: Response) => {
  try {
    const { email, password } = req.body;
    const existingUser = await User.findOne({ email });
    if (!existingUser) {
      res.status(404).json({
        success: false,
        message: "User does not exist. Sign Up First",
      });
    } else {
      const isPasswordMatch = await bcrypt.compare(
        password,
        existingUser.password
      );
      if (!isPasswordMatch) {
        res.status(400).json({
          success: false,
          message: "Incorrect Password. Try Again",
        });
      }
      const token = jwt.sign(
        {
          userId: existingUser._id,
        },
        process.env.JWT_SECRET!,
        { expiresIn: "1h" }
      );
      res.status(200).json({ success: true, token, userId: existingUser._id });
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({ success: false, message: "Something went wrong" });
  }
});

export default router;
