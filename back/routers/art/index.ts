import path from "path";
import { Response, Request, Router } from "express";

const router = Router();

router.get("/:name", async (req: Request<{ name: string }>, res: Response) => {
  try {
    const name = req.params.name;
    const folder = path.resolve(__dirname, "..", "..", "images", name);

    res.download(folder, name, (e) => {
      if (e) {
        res.status(500).send({ message: "Could not download the file" + e });
      }
    });
  } catch (e) {
    res.status(500).json({ message: "Unexpected server error" });
  }
});

export default router;
