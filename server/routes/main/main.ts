import { Request, Response } from "express";
import { Router } from "express";

const router = Router();

router.get("/", (req: Request, res: Response) => {
  res.send({ response: "I am alive!" }).status(200);
});

export default router;
