import { NextFunction, Request, Response } from "express";
import jwt from "jsonwebtoken";

interface DecodedToken {
  userId: string;
}

export interface AuthRequest extends Request {
  userId?: string;
}

export const authMiddleware = async (
  req: AuthRequest,
  res: Response,
  next: NextFunction
): Promise<any> => {
  const token = req.header("Authorization")?.replace("Bearer ", "");
  if (!token) {
    return res.status(403).json({
      success: false,
      message: "Unauthorized! Invalid Token Provided",
    });
  }

  try {
    const decodedToken = jwt.verify(
      token,
      process.env.JWT_SECRET!
    ) as DecodedToken;
    req.userId = decodedToken.userId;
    next();
  } catch (error) {
    res.status(403).json({
      success: false,
      message: "Unauthorized! Invalid Token",
    });
  }
};
