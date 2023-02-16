import cusetes from "../data/cusetes";
import { type Request, type Response } from "express";

const getCusetes = (req: Request, res: Response) => {
  res.status(200).json({ cusetes });
};
