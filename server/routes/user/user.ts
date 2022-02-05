import { Request, Response } from "express";
import { Router } from "express";
import { mockedGenericResponse } from "../../mocks/response.mock";

const router = Router();

router.get("/user", (req: Request, res: Response) => {
  res.send(mockedGenericResponse).status(200);
});

export default router;
