import express, { Response } from "express";
import { authMiddleware, AuthRequest } from "../middleware/auth.middleware";
import Recipe from "../models/Recipe.model";

const router = express.Router();

router.post(
  "/create",
  authMiddleware,
  async (req: AuthRequest, res: Response) => {
    try {
      const { title, description, difficulty } = req.body;
      const newlyCreatedRecipe = new Recipe({
        title,
        description,
        difficulty,
        createdBy: req.userId,
      });
      await newlyCreatedRecipe.save();
      res.status(201).json({
        success: true,
        message: "Recipe added successfully",
        data: newlyCreatedRecipe,
      });
    } catch (error) {
      console.log(error);
      res.status(500).json({ success: false, message: "Something went wrong" });
    }
  }
);

router.get("/get", authMiddleware, async (req: AuthRequest, res: Response) => {
  try {
    const allRecipes = await Recipe.find({});
    res.status(200).json({
      success: true,
      message: "Recipe fetched successfully",
      data: allRecipes,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({ success: false, message: "Something went wrong" });
  }
});

router.get(
  "/get/:id",
  authMiddleware,
  async (req: AuthRequest, res: Response) => {
    try {
      const id = req.params.id;
      const recipe = await Recipe.findOne({ _id: id, createdBy: req.userId });
      if (!recipe) {
        res.status(404).json({ success: false, message: "Recipe not found" });
      }
      res
        .status(200)
        .json({
          success: true,
          message: "Recipe fetched successfully",
          data: recipe,
        });
    } catch (error) {
      console.log(error);
      res.status(500).json({ success: false, message: "Something went wrong" });
    }
  }
);

export default router;
