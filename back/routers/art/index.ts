import { Response, Request, Router } from "express";

const router = Router();

router.get("/", async (r: Request, res: Response) => {
  try {
    // res.json({ levels: LEVELS });
  } catch (e) {
    res.status(500).json({ message: "Unexpected server error" });
  }
});

export default router;
