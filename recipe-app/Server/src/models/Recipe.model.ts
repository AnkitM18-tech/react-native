import mongoose, { Schema, Document } from "mongoose";

export interface IRecipe extends Document {
  title: string;
  description: string;
  difficulty: "Easy" | "Intermediate" | "Advanced";
  createdBy: mongoose.Types.ObjectId;
  createdAt: Date;
}

const RecipeSchema = new Schema<IRecipe>({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  difficulty: {
    type: String,
    required: true,
    enum: ["Easy", "Intermediate", "Advanced"],
  },
  createdBy: {
    type: Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now(),
  },
});

export default mongoose.model<IRecipe>("Recipe", RecipeSchema);
